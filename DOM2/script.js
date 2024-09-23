//getAttribute()

let div = document.querySelector("div");
console.log(div);

let divId = div.getAttribute("id");
console.log(divId);

let neme = div.getAttribute("name");
console.log(neme);

let cls = div.getAttribute("class");
console.log(cls);

let pCls = document.querySelector("p");
console.log(pCls.getAttribute("class"));

//setAttribute()

console.log(pCls.setAttribute("class", "newClass"));

//style (node.style)
div.style.backgroundColor = "pink";
pCls.style.backgroundColor = "red";  

pCls.style.fontSize = "100px";

pCls.innerText = "PINKY COLOUR";

// pCls.style.visibility = "hidden";

//Insert Element
let nBtn = document.createElement("button");
nBtn.innerText = "Click Me!";
console.log(nBtn.innerText);
console.log(nBtn);

div.append(nBtn); //will add at the last

div.prepend(nBtn); //will add at the begining

div.before(nBtn); //will add before the node

div.after(nBtn); //will addafter the node

div.remove(); // to remove the node



let nHead = document.createElement("h1");
nHead.innerHTML = "<i>This is Heading h1!<i>";

document.querySelector("body").prepend(nHead);

// nHead.remove();

//appendChild
const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement("section"))
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li"));
li.textContent = "hello world";

document.body.appendChild(fragment);

//removeChild
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const throwawayNode = parent.removeChild(child);

