console.log("one");
console.log("two");
function hello () {
    console.log("Hello");
}

//timeout
setTimeout(hello, 2000);

// OR

setTimeout(() => {
    console.log("Hello");
}, 4000);

console.log("three");
console.log("four");

