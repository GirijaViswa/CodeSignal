class Queue{

    constructor(){
        this.items = [];
        this.b=0;
    }

    enqueue(element){
        this.items.push(element)
        return this.items
    }

    dequeue(){
        // return this.items.shift()

        if(0!=this.items.length){
            var c=this.items[this.b];
            2*++this.b>=this.items.length&&(this.items=this.items.slice(this.b),this.b=0);
            console.log("c",c)
            return c
        }
    }

    peek(){
        return this.items[0]
    }

    isEmpty(){
        return this.items.length == 0 ? '' 
    }

}





function implementQueue (){
    let q = new Queue();
    console.log(q.items)
    console.log(q.enqueue(10))
    q.enqueue(20)
    q.enqueue(30)
    q.enqueue(40)
    q.enqueue(50)
    
    console.log(q)
    console.log(q.dequeue())
    console.log(q)
    console.log(q.items[0])

}
implementQueue()