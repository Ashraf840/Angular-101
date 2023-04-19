// Types of writing a function-1: Named Function
// Optional Parameter
// "num3" is optional param; use the optional-param inside the function through ternary-operator
function add2(num1: number, num2: number, num3?: number) : number {
    return num3 ? num1+num2+num3 : num1+num2;
}
console.log('Addition (3 params):', add2(3,4,5));
console.log('Addition (2 params):', add2(3,5));

// Types of writing a function-2: Arrow Function
// Required Parameter
// "num3" is required param; thus a default value is defined
const sub2 = (num1: number, num2: number, num3: number = 10) => num1-num2-num3;
console.log('Suntraction (3 param):', sub2(50,20,20));
console.log('Suntraction (2 param):', sub2(50,20));

// Types of writing a function-3: Function Expression
// Rest Parameter
// To pass n-number of parameters, use 3-dots (...) as prefix
function add3(num1: number, num2: number, ...num3: number[]) : number {
    return num1+num2+num3.reduce((acc, curr) => acc+curr);
}
let numbers: number[] = [1,2,3,4,5]
console.log('Total (rest param):', add3(10,20,...numbers));     // Type-1 of passing rest params
console.log('Total (rest param):', add3(10,20,...[1,2,3,4,5]));  // Type-2 of passing rest params
console.log('Total (rest param):', add3(10,20,1,2,3,4,5));  // Type-3 of passing rest params


/*
- A REST parameter cannot be optional parameters as well.
*/

