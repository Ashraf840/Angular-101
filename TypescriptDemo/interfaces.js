"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userIntf1 = {
    name: "John Doe",
    age: 24,
    id: 1001,
    email: "john@doe.com"
};
console.log("Custom data type:", userIntf1);
// Demonstrate optional property
var userIntf2 = {
    name: "Ryan Gosling",
    id: 1002,
    email: "ryan@gosling.com"
};
console.log("Custom data type - Opetional property:", userIntf2);
var userIntf3 = {
    name: "Histesh Chowdhury",
    id: 1003,
    email: "hitesh@chowdhury.com",
    salary: 30000
};
console.log("Extend interface:", userIntf3);
// Notes: Interfaces do not exist in JS, 
// thus after completing the compilation from TS to JS, 
// the interfaces will be removed. So there is a big question, 
// when to use classes and when to use interfaces? 
// The answer is simple, if we want to retain the type, use classes.
