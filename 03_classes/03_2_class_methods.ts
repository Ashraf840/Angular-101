class Employee5 {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id=id;
        this.name=name;
        this.age=age;
    }

    getNameWithAge() : string {
        return this.name + "; " + this.age;
    }
}
let emp5: Employee5;
emp5 = new Employee5(23, "Janvi", 29);
console.log(`emp5:`, emp5);
console.log(emp5.getNameWithAge());