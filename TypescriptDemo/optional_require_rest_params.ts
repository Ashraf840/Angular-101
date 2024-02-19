// 1 - Optional Parameter
function add_optional_param(num1: number, num2: number, num3?: number): number {
    return (!num3) ? num1 + num2 : num1 + num2 + num3;
}
console.log("Add result:", add_optional_param(1, 2, 3));

// 2 - Required Parameter / Default Value
const mul_required_param = (num1: number, num2: number, num3: number = 10): number => {
    return num1 * num2 * num3;
}
console.log("Multiplication result - 2 params passed:", mul_required_param(2, 3));
console.log("Multiplication result - 3 params passed:", mul_required_param(2, 3, 5));

// 3 - Rest Parameters / n-number of params
// NB: Pass rest of the numbers as parameters using rest operator
function add_rest_parameter(num1: number, num2: number, ...num: number[]): number {
    return num1 + num2 + num.reduce((acc, cnum) => acc + cnum);
}
// Require to pass array-of-numbers using rest-operator
let num_array_for_rest_param: number[];
num_array_for_rest_param = [1, 2, 3, 4, 5];
console.log("Add result - rest param:", add_rest_parameter(1, 2, ...num_array_for_rest_param));
console.log("Add result - simplify:", add_rest_parameter(1, 2, 1, 2, 3, 4, 5));

// Generic Functions
// Write a function which can take an array of number / string, concat them return the result
function concatItems<Type>(item: Type[]): Type[] {
    return new Array<Type>().concat(item);
}
console.log("Concat numbers - generic func:", concatItems([1, 2, 3, 4, 5]));
console.log("Concat string - generic func:", concatItems(['a', 'b', 'c', 'd', 'e']));

