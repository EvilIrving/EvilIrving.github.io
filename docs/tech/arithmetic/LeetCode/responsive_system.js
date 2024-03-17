const rawData = {  name: ''}
const bucket = new Set()

const obj = new Proxy(rawData, {
    get(target, key) {
        bucket.add(effect)
        return target[key]
     },

    set(target, key, newVal) {
        bucket.forEach(fn=>fn()) 
        target[key] = newVal
        return true
    }
})


// 副作用函数
function effect() {
    rawData.name = 'Garcia'
}

effect()

console.log(rawData);
setTimeout(() => {
    rawData.name = 'Cain'
    console.log(rawData);
}, 1000);
