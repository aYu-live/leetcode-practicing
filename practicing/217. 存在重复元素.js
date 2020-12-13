/** 217. 存在重复元素
* 给定一个整数数组，判断是否存在重复元素。
* 如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
* 示例 1:
* 输入: [1,2,3,1]
* 输出: true
* 示例 2:
* 输入: [1,2,3,4]
* 输出: false
* 示例 3:
* 输入: [1,1,1,3,3,4,3,2,4,2]
* 输出: true
* */
/**
 * @param {number[]} nums
 * @return {boolean}
 * 运行时间	内存消耗	语言
   76 ms	43.4 MB	JavaScript
 */
var containsDuplicate = function(nums) {
    const nset = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(nset.has(nums[i])) return true
        nset.add(nums[i])
    }
    return false;
};

// =====================================

/**
 * @param {number[]} nums
 * @return {boolean}
 * 运行时间	内存消耗	语言
   96 ms	45.9 MB 	JavaScript
 */
var containsDuplicate = function(nums) {
    const obj = {}
    for(let i = 0; i < nums.length; i++) {
        if(obj.hasOwnProperty(nums[i])) return true
        obj[nums[i]]=nums[i]
    }
    return false;
};

