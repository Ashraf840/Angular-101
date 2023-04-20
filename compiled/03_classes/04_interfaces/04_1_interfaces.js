"use strict";
/*
Interface: Most of the time, interfaces will be used as USER DEFINED DATA TYPES. Interfaces can also have function definitions.
In terms of JavaScript, we tend to create objects, whereas, in TypeScript, we create Interfaces so that we can ensure type safety.
Interfaces no longer exist in the JavaScript file after transpilation, any variable created with that interface comes down to an object.
*/
exports.__esModule = true;
var user1 = { name: "Istiak", age: 27, email: "istiak@gmail.com", phone: "0123456789", id: 12 };
console.log('use1:', user1);
var user2 = { name: "Mobin", email: "mobin@gmail.com", phone: "0123456789", id: 13 };
console.log('user2:', user2);
// Export Type-2:  Use the "export" keyword before the interface/class/function which will be used in another file.
