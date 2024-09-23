
// let promise = new Promise((resolve, reject) => {
//     console.log("This is promise");
//     resolve("All set");
// });

// console.log(promise);

// let promis = new Promise((resolve, reject) => {
//     console.log("this is for reject");
//     reject("some error occured");
// });

// console.log(promis);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Real time example

// function getData(getDataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data Id: ", getDataId);
//             resolve("Data Id is accessable");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// let prom = getData(123);
// console.log(prom);

// setTimeout(()=>{
//     console.log(prom);
// }, 2000);




