"use strict";
// OBJECT DESTRUCTURING
exports.__esModule = true;
// Create a new kind of object out of "User" interface, where only "name", "age", "phone" is needed. Here, we can implement "Object Destructuring" rather than accessing those props individually through variable in multiple lines. 
var userProfile1 = { name: "Jamil", age: 30, email: "jamil@gmail.com", phone: "0123456789", id: 14 };
// Get "name", "age", "phone" only from the object.
console.log("name: ".concat(userProfile1.name, "; age: ").concat(userProfile1.age, "; phone: ").concat(userProfile1.phone));
var name = userProfile1.name, age = userProfile1.age, phone = userProfile1.phone; // object destructuring over an existing object
console.log("name: ".concat(name, "; age: ").concat(age, "; phone: ").concat(phone));
// Rather than getting only the "name", "age", "phone" through using a variable, implement "Object Destructuring" along with variable-aliasing
// "userProfileName1", "userProfileAge1" & "userProfilePhone1" are the alias of "name", "age" & "phone" variable.
var userProfileName1 = userProfile1.name, userProfileAge1 = userProfile1.age, userProfilePhone1 = userProfile1.phone; // object destructuring over an existing object
console.log("name: ".concat(userProfileName1, "; age: ").concat(userProfileAge1, "; phone: ").concat(userProfilePhone1));
var _a = { name: "Hasnat", age: 26, email: "hasnat@gmail.com", phone: "0123456789", id: 15 }, userProfileName2 = _a.name, userProfileAge2 = _a.age, userProfilePhone2 = _a.phone;
console.log("name: ".concat(userProfileName2, "; age: ").concat(userProfileAge2, "; phone: ").concat(userProfilePhone2));
