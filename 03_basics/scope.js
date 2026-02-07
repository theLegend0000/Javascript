const global = "I am global";
let a = 100

if (true) {
    let a = 200;
    const blockScoped = "I am block scoped";
    console.log(blockScoped); // Accessible here
    console.log(a); // 200
}

console.log(global); // Accessible here
console.log(a); // 100
// console.log(blockScoped); // Error: blockScoped is not defined

addOne(6) // no error

function addOne(num) {
    return num + 1
}

addTwo(5) // error: addTwo is not initialized yet

addTwo = function(num) {
    return num + 2
}

