console.log(`Hello world from HTML`)


let obj =  {
    name: 'huy',
    address: 'Ha Noi',
    getName: function(){
        return this.name;
    }
}

//method getName 

console.log(`Get name : `,obj.getName())