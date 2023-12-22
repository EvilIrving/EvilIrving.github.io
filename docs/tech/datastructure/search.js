import {
    biggerEquals,
    Compare,
    defaultCompare,
    defaultEquals,
    defaultDiff,
    DOES_NOT_EXIST,
    lesserEquals
} from './util.js';
// 顺序搜索
// 略

// 二分搜索
function binarySearch(array, value, compareFn = defaultCompare) {
    // const sortedArr = quickSort(array)
    const sortedArr = array

    let low = 0, high = sortedArr.length - 1

    while (lesserEquals(low, high, compareFn)) {
        const mid = Math.floor((high + low) / 2), midValue = sortedArr[mid], compareValue = compareFn(midValue, value)
        if (compareValue === Compare.LESS_THAN) {
            low = mid + 1
        } else if (compareValue === Compare.BIGGER_THAN) {
            high = mid - 1
        } else {
            return mid
        }
    }

    return DOES_NOT_EXIST
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 7], 3));
// 内插搜索

function interpolationSearch(array, value, compareFn = defaultCompare, equalsFn = defaultEquals, diffFn = defaultDiff) {
    const { length } = array
    let low = 0, high = length - 1, position = -1, delta = -1

    while (low < high && biggerEquals(value, array[low], compareFn) && lesserEquals(value, array[high], compareFn)) {
        delta = diffFn(value, array[low]) / diffFn(array[high], array[low])
        position = low + Math.floor((high - low) * delta)
        if (equalsFn(array[position], value)) {
            return position
        } else if (compareFn(array[position], value) === Compare.LESS_THAN) {
            low = position + 1
        } else {
            high = position - 1
        }
    }
    return DOES_NOT_EXIST
}
console.log(interpolationSearch([1, 2, 3, 4, 5, 6, 7, 7], 3));

// 随机算法
function shuffle(array) {
    for (let index = array.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1))
        swap(array, i, randomIndex)
    }
    return array
}

function swap(arr, i, j) {
    const temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
}