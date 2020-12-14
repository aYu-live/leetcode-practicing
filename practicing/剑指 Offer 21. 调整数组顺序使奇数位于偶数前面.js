/**剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
* 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
* 示例：
* 输入：nums = [1,2,3,4]
* 输出：[1,3,2,4] 
* 注：[3,1,2,4] 也是正确的答案之一。
* 提示：
* 1 <= nums.length <= 50000
* 1 <= nums[i] <= 10000
* */

// ============ 值得学习 分治算法==============

/**
 * @param {number[]} nums
 * @return {number[]}
 * 运行时间	内存消耗	语言
   108 ms	45 MB	JavaScript
 */
var exchange = function(nums) {
    const len = nums.length - 1;
    let end = nums.length -1, start = 0;
    while(start < end) {
        while(nums[end]%2 == 0 && end>0) {
            end--
        }
         while(nums[start]%2 == 1 && start<len) {
            start++
        }
        if (start < end)[nums[start],nums[end]] = [nums[end],nums[start]]
    }
    return nums
 };

//  ===================================
/**
 * @param {number[]} nums
 * @return {number[]}
 * 运行时间	内存消耗	语言
   268 ms	47 MB	JavaScript
 */
var exchange = function(nums) {
    const res = [];
    for(let i = 0; i < nums.length; i++) {
        
        if (nums[i]%2 === 0){
            res.push(nums[i])
        } else {
            res.unshift(nums[i])
        }
    }
    return res;
};