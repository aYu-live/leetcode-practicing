/**205. 同构字符串
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 * 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 * 示例 1:
 * 输入: s = "egg", t = "add"
 * 输出: true
 * 示例 2:
 * 输入: s = "foo", t = "bar"
 * 输出: false
 * 示例 3:
 * 输入: s = "paper", t = "title"
 * 输出: true
 * 说明:
 * 你可以假设 s 和 t 具有相同的长度。
 * */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 运行时间	内存消耗	语言
 * 100 ms	42.9 MB	JavaScript
 */
var isIsomorphic = function(s, t) {
    const s1 = {}
    const t1 = {}
    for (let i in s){
        const x = s[i]
        const y = t[i]
        if ((s1[x] && s1[x] !== y) || (t1[y] && t1[y]!==x) ) {
            return false
        }
        s1[x]=y
        t1[y]=x
    }
    return true
};

// ======================

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 运行时间	内存消耗	语言
 * 96 ms	43.1 MB	JavaScript
 */
var isIsomorphic = function(s, t) {
    for(let i in s) {
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
            return false
        }
    }
    return true
};