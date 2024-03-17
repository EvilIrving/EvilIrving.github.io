
const rawData = { ok: true, name: 'Cain', count: 0, a: 1, b: 2 }
// WeakMap 对 key 是弱引用，不影响垃圾回收器的工 作。
const bucket = new WeakMap() // 桶
let page, temp1, temp2

// 桶的结构
// bucket = {
//     target: Map{
//         key: Set()
//         key2: Set()
//     }
// }

const obj = new Proxy(rawData, {
    get(target, key) {
        console.log('get 触发:', key);
        track(target, key)
        return target[key]
    },

    set(target, key, newVal) {
        console.log('set 触发:', key);
        target[key] = newVal
        trigger(target, key)
        return true
    }
})
const effectStack = [] // 副作用函数栈
let activeEffect  // 存储被注册的副作用函数.
// 注册副作用函数
function registerEffect(fn, options) {
    const effectFn = () => {
        cleanup(effectFn)
        activeEffect = effectFn
        effectStack.push(effectFn)
        const res = fn()

        effectStack.pop()
        activeEffect = effectStack[effectStack.length - 1]
        return res
    }
    effectFn.options = options
    effectFn.deps = []
    if (!options.lazy) {
        effectFn()
    }
    return effectFn
}

// registerEffect(function fn1() {
//     console.log('fn1----');

//     registerEffect(function fn2() {
//         console.log('fn2----');
//         temp2 = obj.name
//     })

//     temp1 = obj.ok
// })

// registerEffect(() => {
//     console.log('副作用函数执行了');
//     page = obj.ok ? obj.name : "not"
// }, {
//     scheduler(fn) {
//         setTimeout(() => {
//             fn()
//         }, 1000);
//     }
// })

function cleanup(effect) {
    for (let index = 0; index < effect.deps.length; index++) {
        const deps = effect.deps[index];
        deps.delete(effect)
    }
    // 重置
    effect.deps.length = 0
}

function track(target, key) {
    if (!activeEffect) return true

    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Set()))
    }
    // console.log(deps.has(activeEffect),activeEffect.toString(),'----------');
    !deps.has(activeEffect) && deps.add(activeEffect)
    activeEffect.deps.push(deps)
}

function trigger(target, key) {
    let depsMap = bucket.get(target)
    if (!depsMap) return true
    const deps = depsMap.get(key)
    if (!deps) return true
    // 确保setter在设置属性值时能够正确地返回一个真值，或者在setter中处理好不存在的属性的情况。
    const depsTorun = new Set(deps)
    // depsTorun.forEach(fn=>fn())
    depsTorun.forEach(fn => {
        if (fn.options.scheduler) {
            fn.options.scheduler(fn)
        } else {
            fn()
        }
    });
}

// obj.noExist = '---'
// obj.name = "Garcia"
obj.ok = false

// TODO  此处存疑,到底 deps 这些东西如何理解,打断点执行的过程,不知道作者到底想表达什么

const jobQueue = new Set(), p = Promise.resolve()
let isFlushing = false
function flushJob() {
    if (isFlushing) return
    isFlushing = true
    p.then(() => {
        jobQueue.forEach(job => job())
    }).finally(() => {
        isFlushing = false
    })
}


registerEffect(() => {
    console.log(obj.count, 'count')
}, {
    scheduler(fn) {
        jobQueue.add(fn)
        flushJob()
    }
})

obj.count++
obj.count++
obj.count++
obj.count++


function computed(getter) {
    let value, dirty = true
    const effectFn = registerEffect(getter, {
        lazy: true,
        scheduler() {
            if (!dirty) {
                dirty = true
                trigger(innerObj, 'value')
            }
        }
    })

    const innerObj = {
        get value() {
            track(innerObj, 'value') // 调整位置 issue:https://github.com/HcySunYang/code-for-vue-3-book/issues/196
            if (dirty) {
                value = effectFn()
                dirty = false
            }
            return value
        }
    }

    return innerObj
}

const sum = computed(() => obj.a + obj.b)

console.log(sum.value, '-------sum+++++++++');
obj.a = 10
console.log(sum.value, '-------sum-----');


function watch(source, callback, options = {}) {
    let getter
    if (typeof source === 'function') {
        getter = source
    } else {
        getter = () => traverse(source)
    }

    let oldVal, newVal

    let job = () => {
        newVal = effectFn()
        callback(oldVal, newVal)
        oldVal = newVal
    }

    const effectFn = registerEffect(() => getter(), {
        lazy: true,
        scheduler: job
    })

    if (options.immediate) {
        job()
    } else {
        oldVal = effectFn()
    }

}

function traverse(value, seen = new Set()) {
    if (typeof value !== 'object' || value === null || seen.has(value)) return
    seen.add(value)
    for (const key in value) {
        // if (Object.hasOwnProperty.call(value, key)) {
        const element = value[key];
        traverse(element, seen)
        // }
    }

    return value
}

watch(() => obj.name, (oldVal, newVal) => {
    console.log(oldVal, '属性变化->', newVal);
}, { immediate: true })
watch(obj, (oldVal, newVal) => {
    console.log(oldVal, '对象某个属性变化->', newVal);
})

obj.name = 'Garcia'
