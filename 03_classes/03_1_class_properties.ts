/*
    Avoid the error:  The error "Property has no initializer and is not definitely assigned in the constructor" occurs when we declare a class property without initializing it.
*/

// Type of defining class-properties-1: set default values
class Employee1 {
    id: number = 1;
    name: string = "Rebecca";
    age: number = 27;
}
let emp1: Employee1;
emp1 = new Employee1();
console.log(`emp1:`, emp1);


// Type of defining class-properties-2: non-null assertion operator
class Employee2 {
    id!: number;
    name!: string;
    age!: number;
}
let emp2: Employee2;
emp2 = new Employee2();
emp2.id=2;
emp2.name="Badhon";
emp2.age=29;
console.log(`emp2:`, emp2);


// Type of defining class-properties-3: Provide initial values inside of the class's constructor
class Employee3 {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id=id;
        this.name=name;
        this.age=age;
    }
}
let emp3 = new Employee3(12, "Alex", 18);
console.log(`emp3`, emp3);


// Type of defining class-properties-4: Make the class properties as optional
class Employee4 {
    id?: number;
    name?: string;
    age?: number;
}
let emp4 = new Employee4();
emp4.id=31;
emp4.name="Raisul";
emp4.age=32;
console.log(`emp4`, emp4);

