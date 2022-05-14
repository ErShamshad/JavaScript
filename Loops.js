console.log("Good Morning India.");

// let arr=[2,3,5,6,8,4];
// arr.forEach(function(element){
//     console.log(element);
// });

let obj={
    name:"Shamshad",
    age:23,
    Type: "Gentle Man",
    OS:"Windows"
}

for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}