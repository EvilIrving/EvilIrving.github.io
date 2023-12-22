var strStr = function (haystack, needle) {
    let n = needle.length, h = haystack.length
    for (let i = 0; i < h; i++) {
        let str = haystack.substr(i, n)
        if (str === needle) return i
    }
    return -1
};

const firstUniqChar = function (s, t) {
    let map = new Map()

    for (let i = 0; i < s.length; i++) {
        const c1 = s[i], c2 = t[i]
        if (map.has(c1)) {
            if (map.get(c1) !== c2) return false
        } else {
            for (const [key,value] of map) {
                if (value === c2) return false
            }
        }
        map.set(c1, c2)
    }
    return true
};

console.log(firstUniqChar("paper", 'title'));

// 按shift+alt，再使用鼠标拖动，也可以出现竖直的列光标
// 选中一段文字，按shift+alt+i，可以在每行末尾出现光标