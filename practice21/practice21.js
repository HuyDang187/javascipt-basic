console.log(`Hello world from HTML`)

let arr =[1,2,3,4,5,6,7]

let initialValue = 2
let reduce = arr.reduce((previusValue,currentValue)=>{
    return previusValue+currentValue
},initialValue
    
)

console.log(reduce)