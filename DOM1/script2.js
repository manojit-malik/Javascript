
//innerText and innerHTML

let fruit = document.querySelector("div");
console.dir(fruit);
console.log(fruit);
console.dir(fruit.innerText)
console.log(fruit.innerText);
console.dir(fruit.innerHTML)
console.log(fruit.innerHTML);

fruit.innerText = "abcd";
fruit.innerHTML = "<div>First div<div>";

let h1 = document.querySelector("h1"); //in html it is written as "Old Heading"
h1.innerText = "New Heading"; //here it will change "Old Heading" to "New Heading"
h1.innerHTML = "<h1><i>New Heading<i></h1>"; // here we have changed the font style to italic.

let h3 = document.querySelector("h3");
console.log(h3.textContent);

//Edit a tag's contente
let h2 = document.querySelector("h2");
// const node = document.createTextNode(" from Apna College students");
// h2.append(node);
//OR
h2.innerText += " from Apna College students";

// let create = document.createElement

let divs = document.querySelectorAll(".box ");
//to get all <div class="box">
console.log(divs);
//to get single
console.log(divs[0]); //first
console.log(divs[0]); //second, likewise we can go ahead..

console.log(divs.length); //to print number of <div>

// for(let i=0;i<divs.length;i++){
//     divs[i].innerText = "Unique Text "+i;
// }
let i=1;
for(let div of divs){
    div.innerText = `Unique Text ${i}`;
    i++;
}

