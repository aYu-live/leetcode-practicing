/** 剑指 Offer 03. 数组中重复的数字
* 找出数组中重复的数字。
* 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
* 示例 1：
* 输入：
* [2, 3, 1, 0, 2, 5, 3]
* 输出：2 或 3 
* 限制：
* 2 <= n <= 100000
*
*  运行时间	 内存消耗	语言
*   84 ms	 45.6 MB	JavaScript
* */

// 用Set解决性能更好
/**
 * Set解决
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    const wSet = new Set()
    for(let i = 0; i< nums.length; i++) {
        console.log(nums[i])
        if (wSet.has(nums[i])) {
            return nums[i]
        } else {
            wSet.add(nums[i])
        }
    }
     return wSet.size === 0 ? -1 : Array.from(wSet)[0]
 };

 /**
 * 数组解决
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    const wSet = []
    for(let i = 0; i< nums.length; i++) {
        if (wSet.includes(nums[i])) {
            return nums[i]
        } else {
            wSet.push(nums[i])
        }
    }
     return -1
 };
 console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))