
alert("My basic Site!");
window.alert("This is window.alert();");
window.console.log("Hi there!");
window.console.log(window);
console.log(window);
console.log(typeof window);

//Here we printed javascript code, javascript object, it does not have any relation with html, 
// but we can still access the html part through javascript.
// To access html in JavaScript the way is called as DOM(Document Object Model).
console.dir(window.document);

console.log(document.body);
console.dir(document.body);
console.dir(document.body.childNodes);
console.dir(document.body.childNodes[5]);
console.log(document.body.childNodes[5]);

//To change background color of body using javascript
document.body.style.background = "orange";
document.body.childNodes[1].innerText = "yohoyohoyoho";

let h1 =  document.getElementById("heading1");
console.dir(h1);
console.log(h1);

let h2 = document.getElementsByClassName("heading1");
console.dir(h2);
console.log(h2);

let parag = document.getElementsByTagName("p");
console.dir(parag);
console.log(parag);

let qrys = document.querySelector("p");
console.log(qrys);
console.dir(qrys);

let qrySALL = document.querySelectorAll(".heading1");
console.log(qrySALL);
console.dir(qrySALL);

let btnQ = document.querySelector("#btn");
console.dir(btnQ);
console.log(btnQ);

let btnQAll = document.querySelectorAll("#btn");
console.dir(btnQAll);
console.log(btnQAll);

let p1 = document.body.firstChild;
console.log(p1);

let p2 = document.body.lastChild;
console.log(p2);

let p3 = document.body.children;
console.log(p3);

const myElement = document.getElementById("heading1");
for (const child of myElement.children) {
  console.log(child.tagName);
}

const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);

console.log(element);

let textNode = document.createTextNode("MNOG");
document.body.appendChild(textNode);
console.dir(textNode);
console.log(textNode);

const h11 = document.createElement("h11");
const textNodee = document.createTextNode("Hello World");
h11.appendChild(textNodee);
console.dir(h11);
console.log(h11);
console.dir(textNodee);
console.log(textNodee);

const paraN = document.createElement("p");
const textNodes = document.createTextNode("Hello World");
paraN.appendChild(textNodes);
console.dir(paraN);
console.log(paraN);

// const docu = new DOMParser().parseFromString("<xml></xml>", "application/xml");
// const comment = docu.createComment(
//   "This is a not-so-secret comment in your document",
// );

// docu.querySelector("xml").appendChild(comment);

// console.log(new XMLSerializer().serializeToString(docu));
// console.dir(new XMLSerializer().serializeToString(docu));

const comment = document.createComment("My comments");
document.body.appendChild(comment);
console.log(comment);
console.dir(comment);


