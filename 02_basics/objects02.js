// Objects by constructor => singleton
const obj1 = new Object()
obj1.name = "Muhammad"
obj1.age = 20
//console.log(obj1)

const regularUser = {

    email: "someone@example.com",
    fullName: {
        firstName: "Muhammad",
        lastName: "Ali"
    }
}

// console.log(regularUser.fullName)
// const obj3 = { obj1, regularUser}
// const obj3 = Object.assign({}, obj1, regularUser) // merging two objects

// most used
// const obj3 = { ...obj1, ...regularUser }
// console.log(obj3)

const users = [
    { userId: 1, fullName: "Muhammad Ali" },
    { userId: 2, fullName: "John Doe" },
    { userId: 3, fullName: "Jane Doe" },  
]

// console.log(users[0].fullName)
// console.log(Object.keys(regularUser))
// console.log(Object.values(regularUser))
// console.log(Object.entries(regularUser))

//console.log(regularUser.hasOwnProperty("email"))


// Object De-structuring

const { email} = regularUser
const { fullName: name} = regularUser
console.log(email)
console.log(name)

// Basic API structure

// {
//     Name: "Muhammad Ali",
//     email: "someone@example.com",
//     age: 20,
// }

// or in array form

// [
//     { Name: "Muhammad Ali",
//       email: "
//       age: 20,
//     },]