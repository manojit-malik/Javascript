objectsInJS.js

const student = {
    fName : "Manojit",
    age : 23,
    cgpa : 7.0,
    isPass : true
};

const profile = {
    username : "@i_mnog",
    posts : 23,
    bio : "I am an OG",
    following : 498,
    followers : 1034,
    accountActive : true

}

/*
This is a comment. 
*/
// This is comment too.

console.log(profile);
console.log(profile.accountActive);
console.log(typeof profile.accountActive);
console.log(typeof profile["accountActive"]);
console.log(profile["followrs"]); //undefined
console.log(profile["followers"]);
console.log(typeof profile.bio);

const age1 = 23;
console.log(age1+"-------------");


student.age++;
student["age"]+=1;
student.age+=1;
student.age = student["age"]+1;

console.log(student);
console.log(typeof student);
console.log(student["fName"])
console.log(student.age);


//String
console.log(1+2);
console.log("abc"+123);
console.log("123"+123);
