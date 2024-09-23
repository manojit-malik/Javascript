function printMsg(msg){
    console.log(msg);
}
for(let i=0;i<5;i++)
printMsg("This is my msg");

function add(x,y){
    console.log(x+y);
    return (x+y);
    // console.log("post return");
}
let sum = add(672,7564);
console.log(sum);

arrowSum = (a,b)=>{
    console.log(a+b);
};
arrowSum(7,10);

let arrowMulti = (a,b) =>{
    return a*b;
};
let mult = arrowMulti(2,9);
console.log(mult);
arrowMulti =1;
console.log(arrowMulti);

const printHello = () =>{
    console.log("hello!");
};
const hello = () => console.log("Only hello!");
hello();
printHello();

