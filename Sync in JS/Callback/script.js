
//Callback function 
function sum (a, b) {
    console.log(a+b);
}

function calculator (a, b, sumCallback) {
    sum(a, b);
}

calculator(1,2,sum);
// OR
calculator(3, 4, (a,b) => {
    console.log(a+b);
});

//callBack using setTimeout
function hello (){
    console.log("Hello");
}
setTimeout(hello, 1000);

