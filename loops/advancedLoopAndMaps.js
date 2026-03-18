// for of loop

// arr = [10, 20, 30, 40, 50];
// for (let value of arr){

//     console.log(value)
// }

const greeting = "Hello World";

// for (let value of greeting){

//     if (value == " "){
//         continue;
//     }
//     console.log(value);
// }

// maps (key-value pairs similar to objects, only difference is that it doesnot
// allow duplicate keys)

const map = new Map();
map.set("PK", "Pakistan");
map.set("PK", "Pakistan"); // it will not add a new key-value pair, 
map.set("PK", "Pakistan Updated");  //dupilicate key, it will update the value
map.set("IN", "India");
map.set("NPK", "New Pakistan")
// console.log(map);

// printing map using for of loop

// for (const key of map) {

//     console.log(key)    //prints the key-value pair as an array
// }

// for (const [key, value] of map) {

//     console.log(key, value)    //prints the key and value separately
// }


// loop in objects

const myObj = {

    js: "javascript",
    py: "python",
    cpp: "C++"
}

// for (const key in myObj){

//     console.log(key, myObj[key])
// }

// forEach loop

const coding = ["javascript", "python", "C++"];

// callback function => a function which doesn't have name and is passed as an argument to another function

// coding.forEach( function(value){

//     console.log(value)
// } ) it takes a callback function as an argument

// or implement it using arrow function

// coding.forEach( (value) => {

//     console.log(value)
// })

// or implement it by providing another function in the argument

function printValue(value){

    console.log(value)
}

//coding.forEach(printValue)  // don't execute the function, just pass the reference of the function as an argument to forEach loop

// coding.forEach((value, index, arr) => {

//     console.log(value, index, arr)  // it will print the value, index and the whole array
// })

myCoding = [
    {

    name: "javascript",
    extension: "js"
},

{
    name: "python",
    extension: "py"
}
]

myCoding.forEach( (value) => {

    console.log(value.name, value.extension)  // it will print the name and extension of each object in the array
} )