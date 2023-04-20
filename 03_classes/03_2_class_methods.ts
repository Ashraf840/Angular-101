import { Login } from "../04_interfaces/04_4_method_definition_as_interface";
import { User } from "../04_interfaces/04_1_interfaces";


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

    // This method is defined as interface, also the return-type of the func
    login(): User {
        return { name: "Janvi", age: 29, email: "janvi@gmail.com", phone: "0123456789", id: 23 };
    }
}
let emp5: Employee5;
emp5 = new Employee5(23, "Janvi", 29);
console.log(`emp5:`, emp5);
console.log(emp5.getNameWithAge());
console.log(`emp5 login:`, emp5.login());
