// FILTER VALUES FROM ARRAY (ELEMS MADE OF OBJECTS)
import { users1 } from "./04_6_array_destructuring";
import { User } from "./04_1_interfaces";

// get all the users whose IDs are greater than 2.
// let resultUsers: User[] = users1.filter((usr) => usr.id > 2);    // using parenthesis
let resultUsers: User[] = users1.filter(usr => usr.id > 2);         // without using parenthesis
console.log(`Result Users:`, resultUsers);

