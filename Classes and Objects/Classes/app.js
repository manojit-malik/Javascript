class ToyotaCar {
    constructor(tyres, milage){
        console.log("this is constructor");
        this.tyres = tyres;
        this.milage = milage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}

// console.log(typeof ToyotaCar)

let fortuner = new ToyotaCar("MRF", 10);
let lexus = new ToyotaCar("" ,10); // if I pass only 10 as parameter it would take 10 for tyres as tyres is the 1st parameter, and it will consider that 10 is for tyres.

console.log(typeof fortuner);

fortuner.start();
lexus.start();

fortuner.setBrand("fortuner");
lexus.setBrand("lexus");

console.log(fortuner); // It will print class ToyotaCar's values as this object is of ToyotaCar
console.log(lexus);


