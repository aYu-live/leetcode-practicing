/**剑指 Offer 32 - I. 从上到下打印二叉树
 * 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回：
 * [3,9,20,15,7]
 * 提示：
 * 节点总数 <= 1000
**/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 运行时间	内存消耗	语言
 *  88 ms	39.5 MB	JavaScript
 */
var levelOrder = function(root) {
    if (!root) {
        return []
    }
    const data = [];
    const queue = [root];
    while(queue.length) {
        const bottom = queue.shift();
        data.push(bottom.val);
        bottom.left && queue.push(bottom.left)
        bottom.right && queue.push(bottom.right)
    }
    return data
};