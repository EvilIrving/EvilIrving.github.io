function defaultEquals(a, b) {
    return a === b;
}

class Node {
    constructor(ele) {
        this.element = ele
        this.next = null
    }
}
class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0
        this.head = null
        this.equalsFn = equalsFn
    }

    push(ele) {
        const node = new Node(ele)
        let current = null
        if (this.head === null) { this.head = node } else {
            current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    insert(ele, index) {
        if (index < 0 || index > this.count) return false
        let node = new Node(ele)
        if (index === 0) {
            node.next = this.head
            this.head = node
        } else {
            let previous = this.getElementAt(index - 1)
            let cur = previous.next
            previous.next = node
            node.next = cur
        }
        this.count++
        return true
    }
    remove(ele) {
        const index = this.indexOf(ele)
        return this.removeAt(index)
    }
    indexOf(ele) {
        let cur = this.head
        for (let i = 0; i < this.count && cur !== null; i++) {
            if (this.equalsFn(ele, cur.element)) { return i }
            cur = cur.next
        }
        return -1
    }
    removeAt(index) {
        if (index < 0 || index > this.count) return false
        let cur = this.head
        if (index === 0) {
            this.head = cur.next
        } else {
            let previous = this.getElementAt(index - 1)
            cur = previous.next
            previous.next = cur.next
        }
        this.count--
        return cur.element
    }
    getElementAt(index) {
        if (index < 0 || index > this.count) return false
        let node = this.head
        for (let i = 0; i < index && node !== null; i++) {
            // if (i === index) return node
            node = node.next
        }
        return node
    }
    isEmpty() {
        return this.size() === 0
    }
    size() {
        return this.count
    }
    getHead() {
        return this.head
    }
    toString() {
        if (this.head === null && this.tail !== null) {
            return ''
        }
        let objStr = ''
        for (let index = 0; index < this.size(); index++) {
            let cur = this.getElementAt(index)
            objStr += `${index === 0 ? '' : ','}${cur.element}`
            cur = cur.next
        }
        console.log(objStr);
        return objStr
    }
}

// 双向链表

class DoublyNode extends Node {
    constructor(ele, next, prev) {
        super(ele, next)
        this.prev = prev
    }
}

class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn)
        this.tail = null
    }

    push(ele) {
        const node = new DoublyNode(ele)
        let current = null
        if (this.head === null && this.tail === null) { this.head = node, this.tail = node } else {
            current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = this.tail = node
            node.prev = current
        }
        this.count++
    }
    insert(ele, index) {
        if (index < 0 || index > this.count) return false
        let node = new DoublyNode(ele)
        if (index === 0) {
            node.next = this.head
            this.head = node
            this.tail = node
        } else if (index === this.count - 1) {
            this.tail
            let cur = this.tail
            cur.next = this.tail = node
            node.prev = cur
        } else {
            let previous = this.getElementAt(index - 1)
            let cur = previous.next
            previous.next = cur.prev = node
            node.next = cur
            node.prev = previous
        }
        this.count++
        return true
    }
    remove(ele, index) {
        // 从头部 中间 尾部删除元素
        if (index < 0 || index > this.count) return false

    }
    removeAt(index) {
        if (index < 0 || index > this.count) return false
        let cur = this.head
        if (index === 0) {
            this.head = cur.next
            if (this.count === 1) {
                this.tail = null
            } else {

                this.head = cur.next
                this.tail.next = null
                this.head.prev = null
            }
        } else if (index === this.count - 1) {
            cur = this.tail
            this.tail = cur.prev
            this.tail.next = null
        } else {
            cur = this.getElementAt(index)
            const prev = cur.prev
            cur.next.prev = prev
            prev.next = cur.next
        }

        this.count--
        return cur.element
    }
    indexOf(ele, index) { }
}

// 单向循环链表
class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn)
    }

    push(ele) {
        let node = new Node(ele)

        if (this.head === null) { this.head = node, this.head.next = this.head } else {
            let current = this.getElementAt(this.size())
            console.log(current, '----');
            current.next = node
            node.next = this.head
        }
        this.count++
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node; // {1}
                    node.next = this.head; // {2} 新增的
                } else {
                    node.next = current; // {3}
                    current = this.getElementAt(this.size()); // {4}
                    // 更新最后一个元素
                    this.head = node; // {5}
                    current.next = this.head; // {6} 新增的
                }
            } else { // 这种场景没有变化
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    removeAt(index) {
        if (index < 0 || index > this.count) return false
        let cur = this.head
        if (index === 0) {
            if (this.count === 1) {
                this.head = null
            } else {
                const removed = this.head
                this.head = removed.next
                let last = this.getElementAt(this.size())
                last.next = this.head
                cur = removed
            }
        } else {
            const prev = this.getElementAt(index - 1);
            cur = prev.next;
            prev.next = cur.next
        }

        this.count--
        return cur.element
    }
}

let cl = new CircularLinkedList()
// debugger
cl.push('aaaa')
cl.push('bbbb')
cl.push('cccc')
cl.toString()

// 有序链表
class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn)
    }
}