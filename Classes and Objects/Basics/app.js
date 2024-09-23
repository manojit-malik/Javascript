let student = {
    fullName: "Manojit Malik",
    marks: 79.4,
    printMarks: function(){
        console.log("Marks: " + this.marks);  // this.marks = student.marks
    }
}

console.log(student);
student.printMarks();

let fruits = ["apple", 'mango'];
fruits.push("banana");
console.log(fruits);
console.log(typeof(fruits));

const employee = {
    clacTax1 (){                            //Preffered way.
        console.log("Tax rate is 10%");
    },
    //OR this way to create method in Object
    clacTax2: function () {
        console.log("Tax rate is 10%");
    }
};
employee.clacTax1();
employee.clacTax2();

// Prototype

const karanArjun = {
    salary: 5000
};
const tapuSena = {
    salary: 5000,
    clacTax2: function () {
        console.log("Tax rate is 20%");
    }
};
karanArjun.__proto__ = employee;
tapuSena.__proto__ = employee;

karanArjun.clacTax1();
tapuSena.clacTax2();

