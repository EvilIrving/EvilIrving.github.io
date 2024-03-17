const rawData = { name: 'Cain' }
const bucket = new Set()
let page

const obj = new Proxy(rawData, {
    get(target, key) {
        console.log('get',key);
        if (activeEffect) {
            bucket.add(activeEffect)
        }
        return target[key]
    },
    
    set(target, key, newVal) {
        console.log('set',key);
        bucket.forEach(fn => fn())
        target[key] = newVal
        return true
    }
})

let activeEffect  // 存储被注册的副作用函数.
// 注册副作用函数
function registerEffect(fn) {
    activeEffect = fn
    fn()
}
registerEffect(() => page = obj.name)
obj.name = "Garcia"
obj.noExist  = '---'

console.log(page, bucket);