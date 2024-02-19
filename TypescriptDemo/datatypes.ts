// Datatype: String
let lname: string;
lname = "Tanjim";
// Infer as "string" datatype
let newName = lname.toUpperCase();
console.log(newName);

// Datatype: Number
let age: number;
age = 25;   // Either integer value
age = 25.5; // Either decimal value

let dob = "31";
let result = parseInt(dob); // Automatically infers as "number" datatype
console.log(result);

// Datatype: Boolean
let isValid: boolean; // Doesn't assign any default value
// console.log(isValid); // Output: undefined; It'll throw an error while compiling down to JS since no value is assigned
isValid = true;
console.log(isValid);

// Datatype: Array
let empList: [];   // Define as an array type of "any"
let names: string[]; // Define as an array type of "String"; Cannot add a number as element here
names = ["Tanjim1", "Tanjim2", "Tanjim3"];
console.log("names:", names);
let generics_number: Array<number>; // Generics; Define as an array type of "Number"; Generics
generics_number = [1, 2, 3, 4, 5];
console.log("generics_number:", generics_number);

let numlist_gt_2 = generics_number.filter((num) => num > 2);
console.log("Numbers greater than 2:", numlist_gt_2);







