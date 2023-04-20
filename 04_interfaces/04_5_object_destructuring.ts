// OBJECT DESTRUCTURING

import { User } from "./04_1_interfaces";

// Create a new kind of object out of "User" interface, where only "name", "age", "phone" is needed. Here, we can implement "Object Destructuring" rather than accessing those props individually through variable in multiple lines. 
let userProfile1: User = { name: "Jamil", age: 30, email: "jamil@gmail.com", phone: "0123456789", id: 14 };
// Get "name", "age", "phone" only from the object.
console.log(`name: ${userProfile1.name}; age: ${userProfile1.age}; phone: ${userProfile1.phone}`);

// Rather than getting only the "name", "age", "phone" through using a variable, implement "Object Destructuring" along with aliasing
let { name: userProfileName1, age: userProfileAge1, phone: userProfilePhone1 }: User = userProfile1;    // object destructuring over an existing object
console.log(`name: ${userProfileName1}; age: ${userProfileAge1}; phone: ${userProfilePhone1}`);

let { name: userProfileName2, age: userProfileAge2, phone: userProfilePhone2 }: User = { name: "Hasnat", age: 26, email: "hasnat@gmail.com", phone: "0123456789", id: 15 };
console.log(`name: ${userProfileName2}; age: ${userProfileAge2}; phone: ${userProfilePhone2}`);

