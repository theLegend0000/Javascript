let score = 33
let againScore = "33"
let againScoreWithText = "33 points"
let againScoreWithNull = null  // same with undefined

let valueInNumber = Number(score)
// console.log(typeof valueInNumber) // number

let valueInNumberAgain = Number(againScore)
// console.log(typeof valueInNumberAgain) // number

let valueInNumberWithText = Number(againScoreWithText)
// console.log(typeof valueInNumberWithText) // number
// console.log(valueInNumberWithText) // NaN

let valueInNumberWithNull = Number(againScoreWithNull)
// console.log(typeof valueInNumberWithNull) // number
// console.log(valueInNumberWithNull) // 0

console.log("1" + 2);
console.log("2" + 1);
console.log("1" + "2");
console.log(2 + 2 + "1");

console.log("1" == 1);
console.log("1" === 1);
