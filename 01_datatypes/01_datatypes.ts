/*  AGENDA
- Data Types  [ string, number, boolean, array, enum, tuple, any, void, never ]
- Type Inefrence
- Union & Intersection Types
- Generics
- Literal Types
*/

import { TupleType } from "typescript";


let lname : string;
lname = 'John';

let newName = lname.toUpperCase();
console.log(newName);

// NB: When we need to create a variable but not have a default value, we can simply define the datatype of the variable.

// Datatype: number (integer & number)
let age : number;
age = 25;  // assign 'Integer' value
age = 25.5;  // assign 'Decimal/Float' value
console.log(`Age: ${age}`);


// TYPE-CAST
let dob: string = "09";
let result = parseInt(dob);     // "result" variable will be of type number; due to "type inferencing"
console.log(`Result: ${result}`);
console.log(`Result (datatype): ${typeof(result)}`);

// Datatype: boolean
// NB: In type-safe language like DOT.NET, JAVA, PYTHON, a boolean-type variable has a default value,
    //  In JAVA, DOT.NET, PYTHON it has a default value of FALSE.
    // By default, TypeScript doesn't assign a default value to a boolean variable., thus returns undefined & throws error while compiling
let isValid : boolean;
isValid = true;
console.log(isValid);   // OUTPUT: undefined; if nothing is assigned.


// Datatype: array
    // Can define array of string, number, boolean
    // Two syntactical way to define an array.
// syntax-1: string-type array
let empList : string[];     // holds all the values of type string
empList = ['Santosh1', 'Santosh2', 'Santosh3'];  // Other than string-type element, it'll throw an error.
console.log(`Employee list: ${empList}`);

// syntax-2: generics <array>
let numList : Array<number>;
numList = [1,2,3,4,5];
console.log(`Number list: ${numList}`);

// syntax-3: array object
let numArrayObject = new Array(4);  // array of 4 elems
numArrayObject[0] = 10;
numArrayObject[1] = 20;
numArrayObject[2] = 30;
numArrayObject[3] = 40;
console.log(`Array object:`, numArrayObject);


let filter_result: number[];
// the VAR expects an array for numbers; curated the numbers greater than 2
filter_result = numList.filter((num) => num>2);
console.log(`Filtered Result: ${filter_result}`);

// the VAR expects only single number/ remain undefined; type-inference is performed
// let num = numList.find((num) => num === 2);      // ALTHOUGH ".find()" is throwing error while compilation, the js file is executing correctly
// console.log(`Find result: ${num}`);

// find the total form the numList
let sum = numList.reduce((acc, num) => acc + num);
console.log(`Total: ${sum}`);


// Datatype: enum
enum Color {
    'Red',
    'Green',
    'Blue'
}

let c: Color = Color.Blue;
console.log(`Selected Color: ${c}`);


// Datatype: Tuple
// Swap numbers
let swapNums: [number, number];     // tuple of numbers

function swapNumbers(num1:number, num2:number) : [number, number] {
    return [num2,num1];
}

swapNums = swapNumbers(10,20);
console.log(`after number-swapping: ${swapNums}`);
console.log(`first elem: ${swapNums[0]}`);
console.log(`second elem: ${swapNums[1]}`);



// Datatype: any
// accepts any kind of datatype to be defined in the variable
// DO NOT USE ANY INSIDE THE NEW CODEBASE, unless we have to work with an exisiting CODEBASE
let department: any;

department = "IT";
// department = 12;

console.log(`Type of dprt: ${typeof(department)}`);


// BEFORE DISCUSSING ABOUT "void" & "never", work on functions


// Datatype: void
// Datatype: never


