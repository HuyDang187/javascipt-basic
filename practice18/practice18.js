console.log(`Hello world from HTML`)


let sum = (x,y) => {
    
    return x+y;
    
}

console.log(`check sum 9+6 : `, sum(9,6))


//callback 

let sumCallback =(x,y,callback) =>{
    let sum = x+y;

    //setTimeout :thuc hien chay code ben trong 1 lan sau 1 khoang thoi gian nhat dinh(miliseconds)
    
    // setTimeout(()=>{
    //     callback(sum);
    // },5000)
    //setInterval : thuc hien chay code ben trong sau moi khoang thoi gian nhat dinh(miliseconds)
    let i = 0;
    let timer = setInterval(()=>{
        callback(sum);
        
        i++;
        console.log(`check i : `, i)
        if(i===5){
            clearInterval(timer)
        }

    },1000)
}

let printSum = (message) =>{
    console.log(`Check sum : `, message);
}

sumCallback(6,9,printSum)
