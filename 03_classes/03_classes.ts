// Boilerplate Class in TS
class Employee {
    // The property-declaration will generally throw an error for not initializing it either with default value, non-null assertion operator or marking the properties as optional.
    // declare only properties, without defining any initial values neither in the definition nor inside the class's constructor.
    id!: number;    // non-null assertion operator
    name!: string;  // non-null assertion operator
    age!: number;   // non-null assertion operator
}

let emp: Employee;
emp = new Employee();   // alternative, let emp = new Employee();
emp.id = 1;
emp.name = "John";
emp.age = 23;

console.log(emp);
