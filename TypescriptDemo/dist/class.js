"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
}
let john = new Employee();
john.id = 1;
john.name = "John";
john.address = "14 Hathway";
console.log("John class-object - w/o constructor:", john);
class Employee2 {
    constructor(id, name, address) {
        // this.#id = id;
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
let doe = new Employee2(2, "Doe", "55 South Avenue");
console.log("Doe class-object - w/ constructor:", doe);
console.log(doe.getNameWithAddress());
// Class Inheritance
class Manager extends Employee2 {
    constructor(id, name, address) {
        super(id, name, address);
    }
    // Static members can be access with the class-name itself, w/o creating the instance of the class
    static getManagerCount() {
        return 10;
    }
    getNameWithAddress() {
        return `${this.name} is the manager at ${this.address}`;
    }
}
let mike = new Manager(3, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());
console.log("Manager count:", Manager.getManagerCount());
class Employee3 {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    login() {
        return {
            name: this.name,
            age: 29,
            id: 1003,
            email: "hitesh@chowdhury.com",
        };
    }
}
let nafis = new Employee3(4, "Nafis Ahmed", {
    street: "ABC",
    city: "Bangalore",
    state: "Kernataka",
    pin: "560076"
});
console.log(nafis);
console.log("Nafis - login result:", nafis.login());
