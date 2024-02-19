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

    getNameWithAddress(): string {
        return `${this.name} is the manager at ${this.address}`;
    }
}
let mike = new Manager(3, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());


