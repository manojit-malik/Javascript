var age = 23; // We can change age's value and re-declare it as well as it is decleared as var. (Bad Practtice to use var)
var age = 24;

let runs = 50; // We change runs's value as it is decleared as let.
runs = 59;

const pie = 3.14; // We cannot change pie's value as it is decleared as const.
console.log(pie);
console.log(typeof pie);

{
    let a = 10;
    console.log(a);
}

{
    let b =20;
    console.log(b);
    console.log(typeof b);
}
let fullName = "Senior Pink";
console.log(fullName);
console.log(typeof fullName);

let p;
console.log("p: "+p);
console.log(typeof p);
p=null;
console.log("p: "+p);
console.log(typeof p);

