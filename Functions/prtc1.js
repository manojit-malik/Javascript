function retVovelCount(string){
    let count =0;
    for(let i =0;i<string.length;i++){
        if(string.charAt(i)==='a' || string.charAt(i)==='e' || string.charAt(i)==='i' || string.charAt(i)==='o' || string.charAt(i)==='u')
        count++;
    }
    return count;
};
console.log(retVovelCount("helloo"));

const vovelCount = (str) =>{
    let count =0;
    for(let char of str){
       if(char === "a" ||  char === "e" ||  char === "i" ||  char === "o" ||  char === "u"){
        count++;
       }
    }
    return count;
};
console.log(vovelCount("hello"));