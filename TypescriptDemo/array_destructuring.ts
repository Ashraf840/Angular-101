import { User } from "./interfaces";

// Array of type User
let users_array_destructuring: Array<User> = [
    { name: "user1", id: 1005, email: "user1@gmail.com", },
    { name: "user2", id: 1006, email: "user2@gmail.com", },
    { name: "user3", id: 1007, email: "user3@gmail.com", },
    { name: "user4", id: 1008, email: "user4@gmail.com", },
    { name: "user5", id: 1009, email: "user5@gmail.com", },
]

// Get only first two indexed elements, rest of the elements will be stored in to a common veriable using rest operator
let [user1, user2, ...restUsers] = users_array_destructuring;
console.log("User1:", user1);
console.log("User2:", user2);
console.log("Rest of the users:", restUsers);
