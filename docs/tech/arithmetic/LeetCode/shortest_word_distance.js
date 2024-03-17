// 给定一个单词列表和两个单词word1和word2，返回列表中这两个单词之间的最短距离 的方法实现
function shortest(words, word1, word2) {
    const left = [], right = []
    words.forEach((ele, idx) => {
        if (ele === word1) left.push(idx)
        if (ele === word2) right.push(idx)
    });

    let min = Number.MAX_SAFE_INTEGER, l = 0, r = 0
    if (word1 !== word2) {
        while (l < left.length && r < right.length) {
            let lIdx = left[l], rIdx = right[r]
            min = Math.min(Math.abs(lIdx - rIdx), min)
            if (lIdx < rIdx) {
                l++
            } else {
                r++
            }

        }
    } else {
        while (l < left.length) {
            min = Math.min(Math.abs(left[l] - left[++l], min))
        }
    }
    return min
}
// 设计一个类，使该类的构造函数能够接收一个单词列表,并计算出最短距离, 方法将被以不同的参数调用多次,因此需要考虑如何优化; 如果 word1和 word2可能相同如何优化
class Words {
    constructor(words) {
        this.wordMap = this.wordsIndexMap(words)
    }

    wordsIndexMap(words) {
        let map = new Map()
        words.forEach((word, index) => {
            if (!map.has(word)) {
                let arr = [index]
                map.set(word, arr)
            } else {
                let arr = map.get(word)
                arr.push(index)
                map.set(word, arr)
            }
        })
        return map
    }

    shortest(word1, word2) {
        const left = this.wordMap.get(word1), right = this.wordMap.get(word2)
        let min = Number.MAX_SAFE_INTEGER, l = 0, r = 0
        if (word1 !== word2) {
            while (l < left.length && r < right.length) {
                let lIdx = left[l], rIdx = right[r]
                min = Math.min(Math.abs(lIdx - rIdx), min)
                if (lIdx < rIdx) {
                    l++
                } else {
                    r++
                }
            }
        } else {
            while (l < left.length - 1) {
                min = Math.min(Math.abs(left[l] - left[++l]), min)
            }
        }

        return min
    }
}

const words = ['make', 'practice', 'xiao', 'make', 'are', 'makes', 'here', 'you', 'hace', 'make'], word1 = 'make', word2 = 'you'
// console.log(shortest(words, word1, word2));

const WordObj = new Words(words)

// console.log(WordObj.shortest('make', 'make'));