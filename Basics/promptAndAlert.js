alert("JavaScript"); //One time popup
console.log(prompt("Input:"));
let id = prompt("give your id: ");
console.log("id is: " + id);
console.log("id is: " , id);

let number = prompt("Enter a number to check if it is divisible by 5 or Not: ");
if(number%5===0){
    alert("Its is divisible by 5");
}
else {
    // console.log(alert("It is not divisible by 5"));   It will throw an error
    alert("Its is not divisible by 5");
    console.log("It is not divisible by 5");
}