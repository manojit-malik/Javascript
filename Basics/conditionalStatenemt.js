
// if, else if, else Statements
let mode = "darkw";
let color;

if(mode==="dark"){
    color="black"
}
else if(mode === "light"){
    color = "white";
}
else color = "provide mode, value is empty";

console.log(color);

let num = 18;

if(num%2===0){
    console.log(num, " is even");
}
else {
    console.log(num, " is odd");
}

//Ternary Operator
age = 18;
let result = age>18 ? "adult" : "not adult";
console.log(age>=18 ? "adult" : "not adult");
age>=18 ? console.log("adult") : console.log("not adult");
console.log(result);

//Switch statement
let fruit = "orange";
switch (fruit){
    case "banana" : {
    console.log("fruit is: " + fruit);
    break;
    }
    case "orange" :{
        console.log("fruit is: " + fruit);
        break;
    }
    case "apple" : {
        console.log("fruit is: " + fruit);
    }
    default : console.log("fruit is eaten by monkey");
}

