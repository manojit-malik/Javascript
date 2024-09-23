
//for loop
for(let i=0;i<5;i++){
    console.log("!Manojit Malik!")
}

//while loop
let nu =0;
while(nu<=5){
    console.log(nu);
    nu++;
}

//do while loop
let qwe=0;
do{
    console.log(qwe);
    qwe++;
}while(qwe<=10)

//for of loop
let i=0;
let size =0;
let str = "Manojit Malik"
for(i of str){  //iterators --> char Of str
    console.log(i);
    size++;
}
console.log(i);
console.log(size);


let employee = {
    name : "Ramesh Kumar",
    age : 23,
    empID : 999
};

for(let i in employee){
    console.log("i=",i, " value of i=",employee[i]);
}
