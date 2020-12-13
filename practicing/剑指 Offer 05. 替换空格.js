/**
* 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
* 示例 1：
* 输入：s = "We are happy."
* 输出："We%20are%20happy."
* 限制：
* 0 <= s 的长度 <= 10000
* */
/**
 * 更优
 * @param {string} s
 * @return {string}
 * 运行时间	内存消耗	语言
   72 ms	37.7 MB	JavaScript
 */
var replaceSpace = function(s) {
    const arr = s.split(' ');
    return arr.join('%20')
};
// ==================================
/**
 * @param {string} s
 * @return {string}
 * 运行时间	内存消耗	语言
 * 92 ms	37.6 MB	JavaScript
 */
var replaceSpace = function(s) {
    return encodeURIComponent(decodeURIComponent(s))
};