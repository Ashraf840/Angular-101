// Datatype: String
var lname;
lname = "Tanjim";
// Infer as "string" datatype
var newName = lname.toUpperCase();
console.log(newName);
// Datatype: Number
var age;
age = 25; // Either integer value
age = 25.5; // Either decimal value
var dob = "31";
var result = parseInt(dob); // Automatically infers as "number" datatype
console.log(result);
// Datatype: Boolean
var isValid; // Doesn't assign any default value
// console.log(isValid); // Output: undefined; It'll throw an error while compiling down to JS since no value is assigned
isValid = true;
console.log(isValid);
// Datatype: Array
var empList; // Define as an array type of "any"
var names; // Define as an array type of "String"; Cannot add a number as element here
names = ["Tanjim1", "Tanjim2", "Tanjim3"];
console.log("names:", names);
var generics_number; // Generics; Define as an array type of "Number"; Generics
generics_number = [1, 2, 3, 4, 5];
console.log("generics_number:", generics_number);
// JS Function: Filter
var numlist_gt_2 = generics_number.filter(function (num) { return num > 2; });
console.log("Numbers greater than 2:", numlist_gt_2);
// JS Function: Find (not working, so removed)
// JS Function: Reduce
var aggregated_generic_numbers = generics_number.reduce(function (acc, cnum) { return acc + cnum; });
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
var swapNums;
function swapNumber(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumber(10, 20);
console.log("Swapped nums:", swapNums);
// Access each value using the index number
console.log("First value:", swapNums[0]);
console.log("Second value:", swapNums[1]);
// console.log(swapNums[2]);   // Throw an error duer to index is out of range
