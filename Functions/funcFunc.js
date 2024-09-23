function func (msg){
    sunc(func);
}

function sunc (func){
    console.log(func);
}

func("Aap Gian hai!");

//for each function on array
let cities = ["pune", "bengaluru", "mumbai", "hydrabad"];

cities.forEach((val) => {
    console.log(val.toUpperCase());
});

cities.forEach((val, idx, cities) => {
    console.log(val.toUpperCase(), idx, cities);
});

let num = [2,3,4,5,6,7,8,9];
num.forEach((val) =>{
    console.log(val*val); //val**2 other way to get the square
});

//other way
const calcSquare = (val) => {
    console.log(val**2);
};

num.forEach(calcSquare);

let nums = [2, 4, 7, 9];

let newArray = nums.map((val) => {
    return val**2;
});

let newEven = nums.filter((val) => {
    return val%2===0;
});

console.log(newArray);
console.log(newEven);

let ar = [54, 4, 78, 4555, 90, 999, 2900, 1];

let greatest = ar.reduce((pre, cur) => {
    return pre > cur ? pre : cur;
});

console.log(greatest);


