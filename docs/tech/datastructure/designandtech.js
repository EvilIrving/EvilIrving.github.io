// 设计与技巧

import { Compare, DOES_NOT_EXIST, defaultCompare } from "./util.js";

// 二分搜索 分而治之版本

function binarySearchRecursive(array, value, low, high, compareFn = defaultCompare) {
    if (low <= high) {
        const mid = Math.floor((high + low) / 2), midValue = array[mid]
        console.log(1);
        if (compareFn(value, midValue) === Compare.LESS_THAN) return binarySearchRecursive(array, value, low, mid - 1, compareFn)
        if (compareFn(value, midValue) === Compare.BIGGER_THAN) return binarySearchRecursive(array, value, mid + 1, high, compareFn)
        if (compareFn(value, midValue) === Compare.EQUALS) return mid
    }
    return DOES_NOT_EXIST
}

function binarySearch(array, value, compareFn = defaultCompare) {
    const low = 0, high = array.length - 1
    binarySearchRecursive(array, value, low, high, compareFn)
}


// 动态规划 
// 背包问题
function knapSack(capacity, weights, values, n) {
    const dp = Array(n + 1)

    for (let i = 0; i < n + 1; i++) {
        dp[i] = Array(capacity + 1).fill(-1)
        dp[i][0] = 0
    }
    for (let j = 0; j < capacity + 1; j++) {
        dp[0][j] = 0
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= capacity; j++) {
            if (j - weights[i - 1] < 0) { dp[i][j] = dp[i - 1][j] } else {
                dp[i][j] = Math.max(
                    // 装
                    dp[i - 1][j - weights[i - 1]] + values[i - 1],
                    // 不装
                    dp[i - 1][j]
                )
            }

        }
    }
    return dp[n][capacity]

}
// console.log(knapSack(5, [2, 3, 4], [3, 4, 5], 3));

// 斐波那契数 ** 消除重叠子问题
function fibs(n) {
    if (n === 1 || n === 2) return 1;
    return fibs(n - 1) + fibs(n - 2);
}

function fib(n) {
    let memo = Array(n + 1).fill(0)
    if (memo[n]) return memo[n]
    return fibRecursive(memo, n)
}

function fibRecursive(memo, n) {
    if (n === 1 || n === 2) return 1;
    if (memo[n] !== 0) return memo[n]
    memo[n] = fibRecursive(memo, n - 1) + fibRecursive(memo, n - 2);
    return memo[n]
}

// 自底向上 循环版本

function fibCircle(n) {
    if (n === 0) return 0
    let memo = Array(n + 1).fill(0)
    memo[1] = 1
    for (let i = 2; i < n + 1; i++) {
        memo[i] = memo[i - 1] + memo[i - 2]
    }
    return memo[n]
}

function fibForward(n) {
    if (n === 0 || n === 1) return n

    let fib_1 = 1, fib_2 = 1
    for (let i = 2; i <= n; i++) {
        let fib_n = fib_1 + fib_2
        fib_2 = fib_1
        fib_1 = fib_n
    }
    return fib_2
}
// console.log(fibs(20));
// console.log(fib(20));
// console.log(fibCircle(20));
// console.log(fibForward(20));

// 最少硬币找零 递归 备忘录
class CoinsChangeRe {
    constructor(coins, amount) {
        this.coins = coins
        this.amount = amount
        this.memo = Array(amount + 1).fill(-1)
    }

    getCoinCount(coins = this.coins, amount = this.amount) {
        if (amount === 0) return 0
        if (amount < 0) return -1
        if (this.memo[amount] !== -1) return this.memo[amount]

        let total = Infinity
        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i];
            let prev = this.getCoinCount(coins, amount - coin)
            if (prev === -1) continue
            total = Math.min(total, prev + 1)
        }
        this.memo[amount] = (total === Infinity ? -1 : total)
        return this.memo[amount]
    }
}
// let coin = new CoinsChangeRe([1, 5, 10, 25], 36)
// console.log(coin.getCoinCount());

//自底向上 循环 DP table
function coinsChange(coins, amount) {
    // 初始化数组dp 大小为amount+1 元素初始化为-1
    const dp = Array(amount + 1).fill(-1)
    dp[0] = 0 // 金额 0 的最优解 是 0

    // 变量i从1循环至amount，计算金额i至amount的最优解
    for (let i = 1; i < dp.length; i++) {
        // 对于每个金额i 使用变量j遍历coins数组
        for (let j = 0; j < coins.length; j++) {
            const coin = coins[j];
            // 所有小于等于i的面值coin，如果金额 i-coin有最优解
            if (coin <= i && dp[i - coin] !== -1) {
                // 如果当前金额还未计算 或者 dp[i] 比正在计算的最优解大
                if (dp[i] === -1 || dp[i] > dp[i - coin] + 1) {
                    dp[i] = dp[i - coin] + 1 // 更新dp[i]
                }
            }
        }
    }
    return dp[amount]
}

console.log('coinsChange:', coinsChange([1, 5, 10, 25], 36));
// console.log(coinsChange([1, 2, 5, 7, 10], 14));


// 最长递增子序列 Longest Increasing Subsequence LIS

function lengthOfLIS(nums) {
    let dp = Array(nums.length + 1).fill(1)

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }


    let res = 0
    for (let i = 0; i < dp.length; i++) {
        const lenStr = dp[i];
        res = Math.max(res, lenStr)
    }
    return res

    // dp[0] = 1 // base case
}

console.log('lengthOfLIS 标准解法:', lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));

function envelops(envelops) {
    // 先对宽度 w 进行升序排序，如果遇到 w 相同的情况，则按照高度 h 降序排序；之后把所有的 h 作为一个数组，在这个数组上计算 LIS 的长度就是答案。
    envelops.sort((a, b) => {
        return a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]
    })

    let heights = []
    for (let i = 0; i < envelops.length; i++) {
        heights[i] = envelops[i][1]
    }
    return lengthOfLIS(heights)
}

console.log('envelops:', envelops([[6, 7], [2, 3], [5, 2], [1, 8], [5, 4], [6, 4]]));
