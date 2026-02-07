userEmail = "someone@example.com"

if (userEmail){

    console.log("You have an email address  ")
}else{

    console.log("Please provide an email address")
}

// Nullish Coalescing Operator ??

let val1;
val1 = null ?? 5;

console.log(val1) // 5

let val2;
val2 = undefined ?? 10;
console.log(val1); // 10

// Ternary Operator
// condition ? expressionIfTrue : expressionIfFalse

let age = 20;

let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Yes, you can vote.