

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
