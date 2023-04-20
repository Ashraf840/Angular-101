import { User } from "./04_1_interfaces";

interface Employee1 extends User {
    salary: number;
};

let iemp1: Employee1 = { 
    name: "Jacob",
    age: 32,
    email: "jacob@gmail.com",
    phone: "0123456789",
    id: 14,
    salary: 40000,
};
console.log(`Employee1 interface:`, iemp1);

