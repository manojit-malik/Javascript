let btn = document.querySelector("#mode");

let body = document.querySelector("body");

let mode = "light";


btn.addEventListener("click", () => {
    console.log("Changing the mode"); 
    
    if(mode==="light"){
        mode="dark";
        body.style.backgroundColor = "black";
        body.style.color ="white";
        //OR
        // body.classList.add("dark");          //not working
        // body.classList.remove("light");      //not working
    }
    else {
        mode="light";
        body.style.backgroundColor = "white";
        body.style.color ="black";
        //OR
        // body.classList.add("light");        //not working
        // body.classList.remove("dark");      //not working
    }
    console.log(mode);
});

