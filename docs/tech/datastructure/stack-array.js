// 基于数组/对象的栈

class ArrayStack {
    constructor() {
        this.items = []
    }

    push(ele) {
        this.items.push(ele)
    }
    pop() {
        this.items.pop()
    }
    peek() {
        // 返回栈顶的元素
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0
    }
    clear() {
        this.items = []
    }
    size() {
        return this.items.length
    }
}

class ObjectStack {
    constructor() {
        this.count = 0
        this.items = {}
    }

    push(ele) {
        this.items[this.count++] = ele
    }
    pop() {
        if (this.isEmpty()) {
            return false
        }
        const result = this.items[--this.count]
        delete this.items[this.count]
        return result
    }
    peek() {
        // 返回栈顶的元素
        if (this.isEmpty()) {
            return false
        }
        return this.items[this.count - 1]
    }
    isEmpty() {
        return this.count === 0
    }
    clear() {
        // 遵循LIFO原则
        while (!this.isEmpty()) {
            this.pop()
        }
        this.count = 0
    }
    size() {
        return this.count
    }

    toString() {
        if (this.isEmpty()) return ''
        let objStr = ''
        for (let i = this.count - 1; i >= 0; i--) {
            objStr += `${i === this.count - 1 ? '' : ','}${this.items[i]}`
        }
        return objStr
    }
}

function transToBinary(decNumber, base) {
    let stack = new ObjectStack()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let binaryString = ''
    while (decNumber > 0) {
        let rem = decNumber % base
        stack.push(rem)
        decNumber = Math.floor(decNumber / base)
    }

    while (!stack.isEmpty()) {
        binaryString += digits[stack.pop()].toString()
    }
    // binaryString = stack.toString()
    console.log(binaryString);
}

transToBinary(100345, 35)