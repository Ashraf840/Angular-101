"use strict";
exports.__esModule = true;
// FILTER VALUES FROM ARRAY (ELEMS MADE OF OBJECTS)
var _04_6_array_destructuring_1 = require("./04_6_array_destructuring");
// get all the users whose IDs are greater than 2.
// let resultUsers: User[] = users1.filter((usr) => usr.id > 2);    // using parenthesis
var resultUsers = _04_6_array_destructuring_1.users1.filter(function (usr) { return usr.id > 2; }); // without using parenthesis
console.log("Result Users:", resultUsers);
