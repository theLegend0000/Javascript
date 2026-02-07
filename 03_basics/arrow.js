const user = {

    username: "Muhammad",
    price: 999,
    welcomeMessage: function(){
        console.log(`Welcome ${this.username}!`)  // this refers to the current object, current context
    }
}

//user.welcomeMessage()
//console.log(this) // in nodejs this refers to an empty object, in browser it refers to window object

function regularFunction(){
    let username = "ABC"
    console.log(this) // in regular function this refers to global object (window in browser, global in nodejs)
    console.log(this.username)  // undefined because username is not a property of global object
}

//regularFunction()

const arrowFunction = (num1, num2) => {

    return num1 + num2  // explicit return
}

// OR

const arrowFunction2 = (num1, num2) => num1 + num2  // OR (num1, num2) implicit return

console.log(arrowFunction(3, 5))
console.log(arrowFunction2(10, 20))