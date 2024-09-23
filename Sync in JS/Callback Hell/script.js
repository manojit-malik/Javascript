
function getData (dataId, getNextData) {

    setTimeout(()=> {console.log("Data: ", dataId)
        if(getNextData) {
            getNextData();
        }
    }, 2000);
 
}

// getData(2);
// getData(21);
// getData(29);

// First 999 will execute and the after 2 seconds getData(666) will execute 
// getData(999, ()=> {getData(666)});


//CallBack Hell OR Pyramid of Doom 

getData(111, ()=> {
    console.log("Getting data 2...");
    getData(222, ()=> {
        console.log("Getting data 3...");
        getData(333, ()=> {
            console.log("Getting data 4...");
            getData(444, ()=> {
                console.log("Getting data 5...");
                getData(555);
            });
        });
    });
});

// This is not waiting
// setTimeout(getData(999),3000)



console.log("Mid Line");

//This won't wait but this is cool, as I thought of it 😂
// for(let i=1;i<=5;i++){
//     getData(i, ()=>{
//         getData(i+1);
//         // i++;
//     });
// }


