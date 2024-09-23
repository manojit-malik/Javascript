//Q1
const btn = document.createElement("button");
btn.innerText = "click me";
console.log(btn.innerText);
console.log(btn);

let body = document.querySelector("body");

body.prepend(btn);
btn.style.background = "purple";
btn.style.color = "white";
//OR
// document.querySelector("body").prepend(btn);

//Q2

let para = document.querySelector("p");
// para.setAttribute("class", "newClass");
para.classList.add("newClass");  // it will be having styling of both (old and the new class)
para.classList.remove("newClass"); // it will remove the newClass


