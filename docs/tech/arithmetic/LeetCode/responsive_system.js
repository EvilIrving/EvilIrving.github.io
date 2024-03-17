const rawData = { name: 'Cain' }
// WeakMap 对 key 是弱引用，不影响垃圾回收器的工 作。
const bucket = new WeakMap() // 桶
let page

// 桶的结构
// bucket = {
//     target: Map{
//         key: Set()
//         key2: Set()
//     }
// }

const obj = new Proxy(rawData, {
    get(target, key) {
        console.log('get', key);
        track(target, key)
        return target[key]
    },

    set(target, key, newVal) {
        console.log('set', key);
        target[key] = newVal
        trigger(target, key)
        return true
    }
})

let activeEffect  // 存储被注册的副作用函数.
// 注册副作用函数
function registerEffect(fn) {
    activeEffect = fn
    fn()
}

function track(target, key) {
    if (!activeEffect) return target[key]

    let depsMap = bucket.get(key)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect)
}

function trigger(target, key) {
    let depsMap = bucket.get(target)
    if (!depsMap) return true
    let deps = depsMap.get(key)
    // 确保set陷阱在设置属性值时能够正确地返回一个真值，或者在set陷阱中处理好不存在的属性的情况。
    if (!deps) return true
    deps.forEach(fn => fn);
}

registerEffect(() => page = obj.name)
obj.name = "Garcia"
obj.noExist = '---'

console.log(obj, bucket);