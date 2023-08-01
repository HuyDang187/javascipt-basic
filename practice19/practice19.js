console.log(`Hello world from HTML`)

const ages = [15,16,25,26,27,29,30]
let arr = [
    {name:'H',age: 25},
    {name:'P',age:26},
    {name:'C',age: 21},
    {name:'D',age:18}
]

//filter vd1
const result = ages.filter((age)=>{
    return age >=18; })
console.log(`ages >=18 check : `,result)


let filter = ages.filter((item,index)=>{
    return item && item <18 ;// tra ve cac item <18 
})
console.log(`ages < 18 :`,filter)

//filter vd 2:
let filter2 = arr.filter((item,index)=>{
    return item && item.age===26;
})
console.log(`check age =26 : `,filter2)


//find

let find = ages.find((item)=>item>16)// tra ve phan tu dau tien >16
console.log(find)


//find vd 2
let find2 = arr.find((item,index)=>{
    return item && item.name ==='C' // tra ve phan tu dau tien co ten = 'C'
})
console.log(find2)