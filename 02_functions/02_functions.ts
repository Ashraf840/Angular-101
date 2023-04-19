// Variation-1: Named Function
// Require to define the types of parameters; 
// Also we can explicitly define the type of the value returned by this function (number, in this scenario); just to check if the function is returning anything or not where it's intended to be.
function add(num1: number, num2: number) : number {
    return num1+num2;
}
console.log('Addition:',add(5,2));

// Variation-2: Arrow Function
const subtract = (num1: number, num2: number) : number => num1 - num2;
console.log('Subtraction:',subtract(10,4));


// Variation-3: Function Expression
const mul = function(num1: number, num2: number) : number {
    return num1*num2;
}
console.log('Multiplication:', mul(3,4));

