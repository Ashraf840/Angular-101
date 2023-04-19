// Variation-1: Named Function
// Require to define the types of parameters; 
// Also we can explicitly define the type of the value returned by this function (number, in this scenario); just to check if the function is returning anything or not where it's intended to be.
function add(num1, num2) {
    return num1 + num2;
}
console.log('Addition:', add(5, 2));
// Variation-2: Arrow Function
var subtract = function (num1, num2) { return num1 - num2; };
console.log('Subtraction:', subtract(10, 4));
// Variation-3: Nameless/Named Function (full-structure) inside a Variable
var mul = function (num1, num2) {
    return num1 * num2;
};
console.log('Multiplication:', mul(3, 4));
