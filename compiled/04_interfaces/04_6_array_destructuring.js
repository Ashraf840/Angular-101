"use strict";
exports.__esModule = true;
exports.users1 = void 0;
// Create an array of type User (interface)
var users1 = [
    { name: "john1", email: "john1@gmail.com", id: 1 },
    { name: "john2", email: "john2@gmail.com", id: 2 },
    { name: "john3", email: "john3@gmail.com", id: 3 },
    { name: "john4", email: "john4@gmail.com", id: 4 },
    { name: "john5", email: "john5@gmail.com", id: 5 },
];
exports.users1 = users1;
console.log('users array (of type "User" type):', users1);
// Need only two of the elem from the "users1" array
var users1Elem1 = users1[0], users1Elem2 = users1[1], RestUsersElems = users1.slice(2);
console.log("Array destructuring (array-elem-1):", users1Elem1);
console.log("Array destructuring (array-elem-2):", users1Elem2);
console.log("Array destructuring (from rest other array-elem-3):", RestUsersElems[0]);
console.log("Array destructuring (from rest other array-elem-4):", RestUsersElems[1]);
console.log("Array destructuring (from rest other array-elem-5):", RestUsersElems[2]);
console.log("Array destructuring (from rest other array-elem-5):", RestUsersElems[3]); // out-of-range of the array; OUTPUT: undefined
