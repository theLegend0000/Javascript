// 1. Primitive Data Types
// These are the simplest, immutable values. They are stored directly in the stack.

// Examples:

// string → "Hello"

// number → 42

// boolean → true / false

// null

// undefined

// symbol

// bigint

// Characteristics:

// Stored by value (a copy is made when assigned).

// Immutable (cannot be changed directly, only replaced).

// Fast to access

// 2. Non-Primitive (Reference) Data Types
// These are more complex structures like objects and arrays. They are stored in the heap, and the variable holds a reference (pointer) to the memory location.

// Examples:

// object → { name: "Ali" }

// array → [1, 2, 3]

// function → function greet() { ... }

// Characteristics:

// Stored by reference (variables point to the same object in memory).

// Mutable (you can change their contents without replacing the variable).

// More flexible but slower to access.

let name = "Muhammad"
let age = 20
let state = null
let isStudent

console.log(typeof name)      // string
console.log(typeof age)       // number
console.log(typeof state)     // object
console.log(typeof isStudent) // undefined
