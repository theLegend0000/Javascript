myarr = [0, 1, 2, 3, 4, 5]
// array is an object in javascript
// // arrays can be accesed by their index
// // array copy operations are shallow copy (changes in also original copy) rather than deep copy
// const myarr2 = new Array("Muhammad", "Ali")
// console.log(myarr2[0])
// myarr2.push("Hussain") // add element at the end
// console.log(myarr2)
// myarr2.pop() // remove element from the end
// myarr.unshift(9)
// console.log(myarr)
// myarr.shift()
// console.log(myarr)
// const newArr = myarr.join("-")
// console.log(newArr)
// console.log(typeof newArr)

console.log("Original", myarr)

const sliceArr = myarr.slice(1, 4)
console.log("Slice", sliceArr)

const spliceArr = myarr.splice(1, 3)
console.log("Splice", spliceArr)
console.log("After Splice the original array", myarr)