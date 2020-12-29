/**387. 字符串中的第一个唯一字符
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 示例：
 * s = "leetcode"
 * 返回 0
 * s = "loveleetcode"
 * 返回 2
 * 提示：你可以假定该字符串只包含小写字母。
**/

/**
 * @param {string} s
 * @return {number}
 * 运行时间	内存消耗	语言
 * 112 ms	41 MB	JavaScript
 */
var firstUniqChar = function(s) {
    /**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (let i = 0; i<s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            return i
        }
    }
    return -1;
};
};