// User defined custom data types (to ensure type safety, handle complex objects)
export interface User {
    name: string;
    age?: number;    // Make this property as optional
    id: number;
    email: string;
}

let userIntf1: User = {
    name: "John Doe",
    age: 24,
    id: 1001,
    email: "john@doe.com"
}
console.log("Custom data type:", userIntf1);

// Demonstrate optional property
let userIntf2: User = {
    name: "Ryan Gosling",
    id: 1002,
    email: "ryan@gosling.com"
}
console.log("Custom data type - Opetional property:", userIntf2);

// Extend interface properties
interface EmployeeInterface extends User {
    salary: number;
}
let userIntf3: EmployeeInterface = {
    name: "Histesh Chowdhury",
    id: 1003,
    email: "hitesh@chowdhury.com",
    salary: 30000
}
console.log("Extend interface:", userIntf3);

// Method definition in interface
export interface Login {
    login(): User;
}
