"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userIntf4 = {
    name: "Histesh Chowdhury",
    id: 1004,
    email: "hitesh@chowdhury.com",
};
console.log("Extend interface:", userIntf4);
// Object Destructuring /Just to get the necessary bariables out of the object
let { name: ui4_name, email: ui4_email } = userIntf4;
console.log(`Name: ${ui4_name}; Email: ${ui4_email}`);
