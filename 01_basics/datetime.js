let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 1, 1)
// myCreatedDate = new Date(2026, 1, 2)
// myCreatedDate = new Date("2-1-2026")
// //console.log(myCreatedDate.toDateString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myDate.getMonth() + 1);
// console.log(myDate.toLocaleString())
console.log(myDate.toLocaleString('default', {

    weekday: 'long',
}))

