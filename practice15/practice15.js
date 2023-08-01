console.log('Hello world from HTML')

function sum(x,y){
    return x+y;
}
function minus(x,y){
    if(x>y){
        console.log(`gia tri la mot so duong`,x-y);
        } 
    else if(x<y) {
        console.log(`gia tri la mot so am`,x-y)
        }
    else{
        console.log(`gia tri la 0`);}
    return x-y;
    
}
console.log(`check sum : `,sum(9,6))
console.log(`check minus `,minus(6,6))