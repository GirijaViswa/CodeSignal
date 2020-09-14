
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2




// correct solution

var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let min = this.stack.length === 0 ? x : this.stack[this.stack.length - 1].min
    this.stack.push({val: x, min: Math.min(min, x)})
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length > 0){
        this.stack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length > 0) {
        return this.stack[this.stack.length - 1].val
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length > 0) {
        return this.stack[this.stack.length - 1].min
    }
};


// wrong one down

class MinStack{
    constructor(){
        this.items = [];
        this.minitems = [];
    }
    
    push(x){
        this.items.push(x)
        if((this.items.length == 1) || (x < this.minitems[this.minitems.length-1])){
            this.minitems.push(x)
        }
    }
    
    pop(){
        if(this.items.length > 0){
             let popElement = this.items.pop()
            if (this.minitems.includes(popElement)){
                let idx = this.minitems.indexOf(popElement)
                this.minitems.splice(idx,1)
            }
         }
    }
    
    getMin(){
        return this.minitems[this.minitems.length-1]
    }

    top(){
        if(this.items.length > 0){
         return this.items[this.items.length-1]
         }
    }
    
}

let ins = new MinStack();
console.log(ins)
ins.push(1)
ins.push(2)
ins.push(3)
console.log(ins)
ins.pop()
console.log(ins)
console.log("top",ins.top())
console.log("min",ins.getMin())
