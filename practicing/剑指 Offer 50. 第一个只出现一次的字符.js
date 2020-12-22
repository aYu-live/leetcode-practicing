/**剑指 Offer 50. 第一个只出现一次的字符
* 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
* 示例:
* s = "abaccdeff"
* 返回 "b"
* s = "" 
* 返回 " "
* 限制：
* 0 <= s 的长度 <= 50000
**/



/**
 * @param {string} s
 * @return {character}
 * 烂解法
 * 运行时间	内存消耗	语言
 * 124 ms	40.7 MB	JavaScript
 */
var firstUniqChar = function(s) {
    const map = new Map();
    for (let i of s) {
        if (map.has(i)) {
            const count = map.get(i)
            map.set(i, count + 1)
        } else {
            map.set(i, 1)
        }
    }
    for(let [k,v] of map.entries()){
        if (v === 1) {
            return k
        }
    }
    return ' '
};

/**
 * @param {string} s
 * @return {character}
 * 烂解法
 * 运行时间	内存消耗	语言
 * 152 ms	43.9 MB	JavaScript
 */
var firstUniqChar = function(s) {
    for(let i of new Set(s)) {
        if (s.match(new RegExp(i, 'g')).length === 1){
            return i[0]
        }
    }
    return ' '
};

/**
 * @param {string} s
 * @return {character}
 * 烂解法
 * 运行时间	内存消耗	语言
 * 152 ms	40.9 MB	JavaScript
 */
var firstUniqChar = function(s) {
    for(let i of s) {
        if(s.indexOf(i) === s.lastIndexOf(i)){
            return i
        }
    }
    return ' '
};