"use strict";
/*  AGENDA
- Data Types  [ string, number, boolean, array, enum, tuple, any, void, never ]
- Type Inefrence
- Union & Intersection Types
- Generics
- Literal Types
*/
exports.__esModule = true;
var lname;
lname = 'John';
var newName = lname.toUpperCase();
console.log(newName);
// NB: When we need to create a variable but not have a default value, we can simply define the datatype of the variable.
// Datatype: number (integer & number)
var age;
age = 25; // assign 'Integer' value
age = 25.5; // assign 'Decimal/Float' value
console.log("Age: ".concat(age));
// TYPE-CAST
var dob = "09";
var result = parseInt(dob); // "result" variable will be of type number; due to "type inferencing"
console.log("Result: ".concat(result));
console.log("Result (datatype): ".concat(typeof (result)));
// Datatype: boolean
// NB: In type-safe language like DOT.NET, JAVA, PYTHON, a boolean-type variable has a default value,
//  In JAVA, DOT.NET, PYTHON it has a default value of FALSE.
// By default, TypeScript doesn't assign a default value to a boolean variable., thus returns undefined & throws error while compiling
var isValid;
isValid = true;
console.log(isValid); // OUTPUT: undefined; if nothing is assigned.
// Datatype: array
// Can define array of string, number, boolean
// Two syntactical way to define an array.
// syntax-1: string-type array
var empList; // holds all the values of type string
empList = ['Santosh1', 'Santosh2', 'Santosh3']; // Other than string-type element, it'll throw an error.
console.log("Employee list: ".concat(empList));
// syntax-2: generics <array>
var numList;
numList = [1, 2, 3, 4, 5];
console.log("Number list: ".concat(numList));
// syntax-3: Array object
var numArrayObject = new Array(4); // array of 4 elems
numArrayObject[0] = 10;
numArrayObject[1] = 20;
numArrayObject[2] = 30;
numArrayObject[3] = 40;
console.log("Array object:", numArrayObject);
var filter_result;
// the VAR expects an array for numbers; curated the numbers greater than 2
filter_result = numList.filter(function (num) { return num > 2; });
console.log("Filtered Result: ".concat(filter_result));
// the VAR expects only single number/ remain undefined; type-inference is performed
// let num = numList.find((num) => num === 2);      // ALTHOUGH ".find()" is throwing error while compilation, the js file is executing correctly
// console.log(`Find result: ${num}`);
// find the total form the numList
var sum = numList.reduce(function (acc, num) { return acc + num; });
console.log("Total: ".concat(sum));
// Datatype: enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log("Selected Color: ".concat(c));
// Datatype: Tuple
// Swap numbers
var swapNums; // tuple of numbers
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
console.log("after number-swapping: ".concat(swapNums));
console.log("first elem: ".concat(swapNums[0]));
console.log("second elem: ".concat(swapNums[1]));
// Datatype: any
// accepts any kind of datatype to be defined in the variable
// DO NOT USE ANY INSIDE THE NEW CODEBASE, unless we have to work with an exisiting CODEBASE
var department;
department = "IT";
// department = 12;
console.log("Type of dprt: ".concat(typeof (department)));
// BEFORE DISCUSSING ABOUT "void" & "never", work on functions
// Datatype: void
// Datatype: never
