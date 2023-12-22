class Queue {
    constructor() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    enqueue(ele) {
        this.items[this.count++] = ele
    }
    dequeue() {
        if (this.isEmpty()) {
            return false
        }
        let res = this.items[this.lowestCount++]
        delete this.items[this.lowestCount]
        return res
    }

    peek() {
        if (this.isEmpty()) {
            return false
        }
        return this.items[this.lowestCount]
    }
    isEmpty() {
        return this.size() === 0
    }
    clear() {
        this.items = {}
        this.count = this.lowestCount = 0
    }
    size() {
        return this.count - this.lowestCount
    }
    toString() {
        if (this.isEmpty()) {
            return false
        }
        let objStr = ''
        for (const [index, value] of Object.entries(this.items)) {
            objStr += `${index == this.lowestCount ? '' : ','}${value}`
        }
        return objStr
    }
}

// 双端队列 “deque  double-ended queue”
class Deque extends Queue {
    constructor() {
        super()
    }
    addFront(ele) {
        if (this.isEmpty()) { this.addBack(ele) } else
            if (this.lowestCount > 0) { this.items[--this.lowestCount] = ele } else
                if (!this.isEmpty() && this.lowestCount === 0) {
                    // 可以将 lowestCount 设置为 负数，需要修改其它逻辑满足它
                    // 后移队列元素
                    for (let i = this.count; i > 0; i--) {
                        this.items[i] = this.items[i - 1];
                    }
                    this.count++;
                    this.lowestCount = 0;
                    this.items[0] = ele;
                }
    }
    addBack(ele) {
        this.items[this.count++] = ele
    }
    removeFront() {
        if (this.isEmpty()) {
            return false
        }
        let res = this.items[this.lowestCount]
        delete this.items[this.lowestCount++]
        return res
    }
    removeBack() {
        if (this.isEmpty()) {
            return false
        }
        const res = this.items[--this.count]
        delete this.items[this.count]
        return res
    }
    peekFront() {
        if (this.isEmpty()) {
            return false
        }
        return this.items[this.lowestCount]
    }
    peekBack() {
        if (this.isEmpty()) {
            return false
        }
        return this.items[this.count]
    }
}



// function hotPotato(eleList, num) {
//     const que = new Queue()
//     let elimateList = []
//     eleList.forEach(ele => que.enqueue(ele));

//     while (que.size() > 1) {
//         for (let i = 0; i < num; i++) {
//             que.enqueue(que.dequeue())
//         }
//         elimateList.push(que.dequeue)
//     }
//     return {
//         winner: que.dequeue(),
//         elimateList
//     }
// }

// const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
// const result = hotPotato(names, 3);

// result.elimateList.forEach(item => {
//     console.log(`${item}failed`)
// })

// console.log(result.winner + 'success');


function palindromeChecker(str) {
    // 验证字符串合法
    if (str === undefined || str === null || str === '') return false
    // 添加进队列
    const deque = new Deque()
    for (let i = 0; i < str.length; i++) {
        deque.addBack(str.charAt(i))
    }
    // 验证队列长度不为1
    if (deque.size() === 1) return true

    // 验证回文
    while (deque.size > 1) {
        if (deque.removeBack() !== deque.removeFront()) return false
    }

    return true
}

console.log('Was it a car or a cat I saw:', palindromeChecker('Was it a caror a cat I saw'))