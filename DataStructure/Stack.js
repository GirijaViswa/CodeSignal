var CustomStack = function(maxSize) {
     this.size = maxSize;
     this.items = []
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.items.length < this.size){
        this.items.push(x)
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.items.length == 0){
        return -1;
    }
    else{
        return this.items.pop()
    }
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    for(let i=0;i<k;i++){
        if( i<this.items.length){
            this.items[i] = (this.items[i] + val) 
        }
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

var obj = new CustomStack(5)
console.log(obj.size)
obj.push(1)
obj.push(2)
obj.push(3)

console.log(obj)
// var param_2 = obj.pop()
// console.log(param_2)
// console.log(obj)
obj.increment(5,100)
obj.increment(2,100)
console.log(obj)


