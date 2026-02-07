// objects can be made either by constructor or literal syntax
// if made by constructor, they are singleton, but, if with literal they are not
// singleton
// Object.create


// objects literal

const mysym = Symbol("myidentifier")
const jsUser = {
    name: "Muhammad",
    age: 20,
    [mysym]: "mysym",   // to use symbol use []
    isStudent: true,
    isLoggedIn: false,
}       // keys are always strings behind the scenes

// console.log(jsUser.name)
//console.log(jsUser[name]) // error name is not defined because name is treated as a string
// console.log(jsUser["name"])
// console.log(jsUser[mysym])
// console.log(typeof jsUser[mysym])

// To overide the value
// jsUser.age = 21
// console.log(jsUser.age)

// To freeze the value, so it cannot be changed
// Object.freeze(jsUser)
// jsUser.age = 22
// console.log(jsUser.age) // still 20

jsUser.greeting = function() {
    console.log("Hello JS User");
    return 1
}

// console.log(jsUser.greeting)    //gives the function reference, will not execute the function
// console.log(jsUser["greeting"])
// console.log(jsUser.greeting()) // function invocation, will execute the function
// console.log(jsUser["greeting"]()) // also return the return type of the function

jsUser.greeting2 = function() {

    console.log(`Hello ${this.name}`)  // this refers to the current object
}
console.log(jsUser.greeting2())