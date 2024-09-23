let marks = [43, 56, 90, 78, 60];
console.log(marks);
console.log(marks.length);
marks[2] = 89;
console.log(marks);
console.log(marks[8]); //undefined

let heroes = ["ironman", "spiderman", "batman"];
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}

for(let hero of heroes){
    console.log(hero);
}

let sum=0;
for(let i = 0;i<marks.length;i++){
    sum+=marks[i];
}
console.log("average marks is: "+(sum/marks.length));

//final price post 10% off
let price = [340, 390, 480, 790];
console.log(price);
for(let i = 0;i<price.length;i++){
    let fin = price[i]/10;
    price[i]-=fin;
}
console.log(price);

let cities = ["pune", "banglore", "mumbai", "nagpur"];
for(let city of cities){
    console.log(city.toUpperCase());
}

let foodItems = ["apple", "banana", "potato", "litchies"];
foodItems.push("chips", "pizza", "paneer");
let n = foodItems.lastIndexOf("chips");
console.log(n);
console.log(foodItems);
let deletedItem = foodItems.pop("paneer");
console.log(foodItems);
foodItems.pop();
console.log("deleted: "+ deletedItem);
console.log(foodItems);
console.log(foodItems.toString());

let marvelHeroes = ["antman", "thor", "spiderman", "Dr. Strange", "Hulk"];
console.log(marvelHeroes);
let dcHeroes = ["batman", "superman", "flash"];
let indianHeroes = ["sonpari", "shaktiman", "krish"];
let combinedVerse = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log(combinedVerse);
marvelHeroes.unshift("ironman");
console.log(marvelHeroes);
marvelHeroes.shift();
console.log(marvelHeroes);
console.log(marvelHeroes.slice(1,3)); // It will pring from 1st index to the 2nd index
console.log(marvelHeroes.slice(3)); //It will print from 3rd index to the last index of the array.

//splice() method
let num = [1, 2, 3, 4, 5, 6, 7];
num.splice(2, 0, 101, 102, 103);
console.log(num); //op -> [1, 2, 101, 102, 103, 3, 4, 5, 6, 7]
num.splice(2, 3, 999, 666);
console.log(num); // op -> [1, 2, 999, 666, 3, 4, 5, 6, 7]
num.splice(5); //deleted all the indexes from 5th index till end
console.log(num); // op -> [1, 2, 999, 666, 3]

