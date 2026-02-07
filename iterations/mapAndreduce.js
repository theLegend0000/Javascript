const myNums = [1,2,3,4,5,6,7,8,9]

// const newNums = myNums.map( (num) => num + 10)

// console.log(newNums)  // it will print a new array with each element increased by 10

// or by doing it with forEach

// const newNums = []

// myNums.forEach( (num) => newNums.push(num + 10))

// console.log(newNums);

// chaining

// const newNums = myNums
//                 .map((num) => num * 10)
//                 .map((num) => num + 1)
//                 .filter((num) => num >= 40)

// console.log(newNums)

// reduce

// const myTotal = myNums.reduce(function (acc, cur_val){

//     console.log(`acc:${acc}, current_value:${cur_val}`)
//     return acc + cur_val
// }, 1)

//const myTotal = myNums.reduce( (acc, cur_val) => (acc+cur_val), 0)
console.log(myTotal)