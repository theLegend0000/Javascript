// Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that is defined and immediately executed.
// It is often used to create a new scope and avoid polluting the global namespace.

const result = (function(num1, num2) {

    console.log(num1 + num2)
})(3,4);    //; is necessary


