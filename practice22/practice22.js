console.log(`Hello world from HTML`)

let arr = [1,21,30,100000]

let sort = arr.sort((a,b)=>a-b)

console.log(sort)

let items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
//sort by value
let sortByValue = items.sort((a,b)=>a.value -b.value)

console.log(sortByValue)


//sort by name 

let sortByName = items.sort((a,b)=>{
    let namea = a.name.toUpperCase();
    let nameb = b.name.toUpperCase();

    if(namea < nameb){
        return 1;
    }
    if(namea >nameb){
        return -1;
    }
    return 0;
})

console.log(sortByName)


