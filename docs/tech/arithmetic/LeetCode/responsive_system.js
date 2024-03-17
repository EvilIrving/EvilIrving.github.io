
const rawData = { ok: true, name: 'Cain' }
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
function registerEffect(fn) {
    const effectFn = () => {
        cleanup(effectFn)
        activeEffect = effectFn
        effectStack.push(effectFn)
        fn()
        effectStack.pop()
        activeEffect = effectStack[effectStack.length - 1]
    }
    effectFn.source = effectFn.toString()
    effectFn.deps = []
    effectFn()
}

// registerEffect(function fn1() {
//     console.log('fn1----');

//     registerEffect(function fn2() {
//         console.log('fn2----');
//         temp2 = obj.name
//     })

//     temp1 = obj.ok
// })

registerEffect(() => {
    console.log('副作用函数执行了');
    page = obj.ok ? obj.name : "not"
})

function cleanup(effect) {
    for (let index = 0; index < effect.deps.length; index++) {
        const deps = effect.deps[index];
        deps.delete(effect)
    }
    // 重置
    effect.deps.length = 0
}

function track(target, key) {
    if (!activeEffect) return target[key]

    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Map()))
    }
    // console.log(deps.has(activeEffect),activeEffect.toString(),'----------');
    !deps.has(activeEffect.source) && deps.set(activeEffect.source, activeEffect)
    activeEffect.deps.push(deps)
}

function trigger(target, key) {
    let depsMap = bucket.get(target)
    if (!depsMap) return true
    const deps = depsMap.get(key)
    if (!deps) return true
    // 确保set陷阱在设置属性值时能够正确地返回一个真值，或者在set陷阱中处理好不存在的属性的情况。
    const depsTorun = new Map(deps)
    console.log(deps.size, 'deps');

    deps.forEach((key, dep) => {
        if (dep.source !== activeEffect) depsTorun.set(dep.toString(), dep)
    })
    depsTorun.forEach(fn => fn());
}


// obj.noExist = '---'


// obj.name = "Garcia"
obj.ok = false


console.log(obj, page);


// TODO  此处存疑,到底 deps 这些东西如何理解,打断点执行的过程,不知道作者到底想表达什么