// Type inference meant to infer the type of a variable automatically. 

/*
let userId: number = 334455.8;
userId.toFixed();
console.log(`user id: ${userId}`);
*/

// In this aforementioned commented code, defining type "number" is redundant, since the immediate invoking of the func "userId.toFixed()" automatically perform the type-inference of the variable "userId" where it's instantiated. Thus, the best practice is not to use defining the datatype to such scenarios.

let userId = 3234987234.79;
userId.toFixed();
console.log(`user id: ${userId}`);

