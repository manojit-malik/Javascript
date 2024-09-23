//Event in JS

let div = document.querySelector("div");
div.onmouseover=()=>{
    console.log("div's area");
};


let btn1 = document.querySelector("#btn1");

btn1.onclick =() => {           //this handler will not execute
    console.log("Handler 1");
    let a =25;
    a++;
    console.log(a);
};

btn1.onclick =(e) => {           //this handler will execute, as it is the last handler
    console.log("Handeler 2"); 
    console.log(e.type); 
    
};

//Event Listeners in JS

//Event Listener (add)
let btn2 = document.querySelector("#btn2");
//in the case of Event Listeners all event listeners will be executed and aproach will be top to bottom i.e. the event Listener which is written first will be sxecuted first
btn2.addEventListener ("click" , (event) =>{         // This event listener will executed first
    console.log("This is Event Listener 1");
    console.log("button 2 was clicked");
    console.log(event);
    console.log(event.type);

});

btn2.addEventListener ("click", ()=>{               // This event listener will executed second
    console.log("This is Event Listener 2");
});

let para = document.querySelector("body");
para.onmouseover=(e)=>{                 // e is an argument which is passed as event object, it is like a variable it can be anything (but prefferen as e, evt, event (good practice))
    console.log(e.target);    
    console.log(e.clientX);
    console.log(e.clientY);                 // to get the information on the event
    console.log("mouse on para.");
};

//Event Listener (remove)

let btn3 = document.querySelector(".btn3");

btn3.addEventListener("click", (event) =>{
    console.log("Event Handler- 1")
});

btn3.addEventListener("click", (event) =>{
    console.log("Event Handler- 2")
});

let elr3 = () =>{                       //created a function to use as callback function
    console.log("Event Handler- 3");
}

btn3.addEventListener("click", (elr3));     // calling the callback function to print the "Event Handler- 3".

btn3.addEventListener("click", (event) =>{
    console.log("Event Handler- 4");
});

btn3.removeEventListener("click", (elr3));  //This will not let execute the "Event Handler- 3". It will remove it from execution.
//It can remove it, as both the 3rd event listener and the remove listener are calling for same callback function. They both are same function.

