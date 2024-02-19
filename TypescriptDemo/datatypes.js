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
var numlist_gt_2 = generics_number.filter(function (num) { return num > 2; });
console.log("Numbers greater than 2:", numlist_gt_2);
var name_find_result = names.find(function (name) { return name === "Tanjim3"; });
console.log("Result:", name_find_result);
