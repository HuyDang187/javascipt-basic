console.log(`Hello world from HTML`)


let arr = [1,2,3,4,5,6,7,8,9]
//vong lap for bien doi cac gia tri trong mang arr
// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i]*arr[i]
// }


let map = arr.map((item , index )=>{
    console.log(index);
    item = item * item 

    return item;
})


console.log(`arr ban dau`,arr)
console.log(`arr with map`,map)