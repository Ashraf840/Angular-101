"use strict";
// Datatype: String
let lname;
lname = "Tanjim";
// Infer as "string" datatype
let newName = lname.toUpperCase();
console.log(newName);
// Datatype: Number
let age;
age = 25; // Either integer value
age = 25.5; // Either decimal value
let dob = "31";
let result = parseInt(dob); // Automatically infers as "number" datatype
console.log(result);
// Datatype: Boolean
let isValid; // Doesn't assign any default value
// console.log(isValid); // Output: undefined; It'll throw an error while compiling down to JS since no value is assigned
isValid = true;
console.log(isValid);
// Datatype: Array
let empList; // Define as an array type of "any"
let names; // Define as an array type of "String"; Cannot add a number as element here
names = ["Tanjim1", "Tanjim2", "Tanjim3"];
console.log("names:", names);
let generics_number; // Generics; Define as an array type of "Number"
generics_number = [1, 2, 3, 4, 5];
console.log("generics_number:", generics_number);
// JS Function: Filter
let numlist_gt_2 = generics_number.filter((num) => num > 2);
console.log("Numbers greater than 2:", numlist_gt_2);
// JS Function: Find (not working, so removed)
// JS Function: Reduce
let aggregated_generic_numbers = generics_number.reduce((acc, cnum) => acc + cnum);
console.log("Aggregated num result:", aggregated_generic_numbers);
// Enums (Enumerator)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log("Enums Color:", Color); // Output: { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
// Define a set of color code; Usecase: Senoir frontend dev defined a set of colors that will be used accross the system development
var ColorSet;
(function (ColorSet) {
    ColorSet["Red"] = "#d62246";
    ColorSet["Green"] = "#0e7c7b";
    ColorSet["Blue"] = "#88b7b5";
})(ColorSet || (ColorSet = {}));
console.log("Color set:", ColorSet); // Output: { Red: '#d62246', Green: '#0e7c7b', Blue: '#88b7b5' }
console.log("Color set-2:", "#d62246" /* ColorSet2.Red */); // Output: #d62246
// Datatypes: Tuple
// Fixed number of array elements are defined while instantiation
let swapNums;
function swapNumber(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumber(10, 20);
console.log("Swapped nums:", swapNums);
// Access each value using the index number
console.log("First value:", swapNums[0]);
console.log("Second value:", swapNums[1]);
// console.log(swapNums[2]);   // Throw an error due to index is out of range
// Datatype: Any
// NB: Try to avoid uisng this datatype as much as possible
let department;
// This variable can store any kind of datatype now
department = "IT";
department = 1001;
