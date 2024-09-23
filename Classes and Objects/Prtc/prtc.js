let data = "secret data";
class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(name, email){
        console.log("Data: ", data);
        console.log(this.name);
        console.log(this.email);
    }
}

let studen1 = new User("Manojit", "manojit@malik.com");
let studen2 = new User("Malik", "malik@manojit.com");
let dean = new User("Dean", "dean@college.com");

console.log(studen1);
console.log(studen2);
console.log(dean);

console.log(studen1.viewData());
console.log(studen2.viewData());
console.log(dean.viewData());

class Admin extends User {
    constructor(name, email){
        super(name, email);
    }
    editData(){
        data = "LOL";
    }
}

let admin = new Admin("God", "god@heaven.com", "tingtong");

admin.editData();
console.log(data);
console.log(admin);


