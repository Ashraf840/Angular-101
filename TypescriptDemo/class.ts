import { Login, User } from './interfaces';

class Employee {
    // Add properties
    id!: number;    // Non-null assertion (!)
    name!: string;
    address!: string;
    // NB: The non-null assertion is required if we don't assign these properties in the constructor.
}

let john = new Employee();
john.id = 1;
john.name = "John";
john.address = "14 Hathway";
console.log("John class-object - w/o constructor:", john);


class Employee2 {
    // #id: number; // Private property
    id: number;
    name: string;
    address: string;

    constructor(id: number, name: string, address: string) {
        // this.#id = id;
        this.id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }
}
let doe = new Employee2(2, "Doe", "55 South Avenue");
console.log("Doe class-object - w/ constructor:", doe);
console.log(doe.getNameWithAddress());


// Class Inheritance
class Manager extends Employee2 {
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }

    // Static members can be access with the class-name itself, w/o creating the instance of the class
    static getManagerCount() {
        return 10;
    }

    getNameWithAddress(): string {
        return `${this.name} is the manager at ${this.address}`;
    }
}
let mike = new Manager(3, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());
console.log("Manager count:", Manager.getManagerCount());

// error TS18028: Private identifiers are only available when targeting ECMAScript 2015 and higher.
// - Skipped private members/properties in Class due to the aforementioed error.
// - Skipped getters & setters for the same reason.


// Complex object like Address is handled by using interface, continued after working with the "User Interface in interface.ts" file.
interface Address {
    street: string;
    city: string;
    state: string;
    pin: string
}
class Employee3 implements Login {
    // Add properties
    id: number;
    name: string;
    address: Address;

    constructor(id: number, name: string, address: Address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    login(): User {
        return {
            name: this.name,
            age: 29,
            id: 1003,
            email: "hitesh@chowdhury.com",
        }
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

