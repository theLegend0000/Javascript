function addTwoNumbers (num1, num2) {
  console.log(num1 + num2)
}

result = addTwoNumbers(5, 10)
//console.log(result) // undefined becuase function is not returning anything

function addTwoNumbers2(num1, num2){

    return num1 + num2
}

result2 = addTwoNumbers2(3, 5)
//console.log(result2)    // 8

function greeting(username){

    if (!username){ //or username === undefined
        return "Username is required!"
    }

    return `${username}! Welcome back.`
}
//console.log(greeting("Muhammad"))

function printNumbers(...num){  // ... is called rest operator, it collects all the arguments into an array

    return num
}

console.log(printNumbers(1, 2, 3, 4, 5))