let mark = [89, 90, 91, 45, 98, 100];

let aboveN = mark.filter((val) => {
    return val>90;
});

console.log(aboveN);

console.log(mark.filter((val) => {
        return val>90;
    }));

let n = prompt("Enter a number to create an array upto that number");

let arry = [];

for(let i=0;i<n;i++){
    arry[i]=i+1;
}
console.log(arry);

let sumOfArry = arry.reduce((pre, curr) => {
    return pre+curr;
});
console.log(sumOfArry)

let prodOfArry = arry.reduce((pre, curr) => {
    return pre*curr;
});
console.log(prodOfArry);


