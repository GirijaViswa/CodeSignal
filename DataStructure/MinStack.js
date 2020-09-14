

class MinStack{
    constructor(){
        this.items = [];
        this.minitems = [];
    }
    
    push(x){
        this.items.push(x)
        if((this.items.length == 0) || x < this.minitems[this.minitems.length-1]){
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
        if(this.items.length > 0){
            var temp = this.items[0]
            for(var i=1;i<=this.items.length-1;i++){
                if(temp < this.items[i]){
                    temp = this.items[i]
                 }
            }
        }
     return temp;
    }

    top(){
        if(this.items.length > 0){
         return this.items[-1]
         }
    }
    
}