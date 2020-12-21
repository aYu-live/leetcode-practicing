/**剑指 Offer 30. 包含min函数的栈
* 义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
* 例:
* nStack minStack = new MinStack();
* nStack.push(-2);
* nStack.push(0);
* nStack.push(-3);
* nStack.min();   --> 返回 -3.
* nStack.pop();
* nStack.top();      --> 返回 0.
* nStack.min();   --> 返回 -2.
* 示：
* 函数的调用总次数不超过 20000 次
**/
/**
 * initialize your data structure here.
 * 运行时间	内存消耗	语言
 * 116 ms	45.5 MB	JavaScript
 */
var MinStack = function() {
    this.stack = [];
    this.MIN_NUMBER=Number.MAX_VALUE;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {   
    const min = this.MIN_NUMBER;
    if(x < this.MIN_NUMBER) {
        this.MIN_NUMBER = x
    }
    return this.stack.push(x-min)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const top = this.stack.pop();
    const min = this.MIN_NUMBER;
    if (top < 0) {
        this.MIN_NUMBER = min - top;
        return min;
    }
    return top + min;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const top = this.stack[this.stack.length -1];
    const min = this.MIN_NUMBER;
    if (top < 0) {
        return min;
    }
    return top + min;
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.MIN_NUMBER
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
// =================

/**
 * initialize your data structure here.
 * 运行时间	内存消耗	语言
 * 108 ms	44.5 MB	JavaScript
 */
var MinStack = function() {
    this.minStack = [];
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    if (this.minStack.length) {
        const last = this.minStack[this.minStack.length -1]
        if(last > x) {
            this.minStack.push(x)
        } else {
            this.minStack.push(last)
        }
    } else {
        this.minStack.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const pop = this.stack.pop();
    this.minStack.pop();
    return pop;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length -1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minStack[this.minStack.length -1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */