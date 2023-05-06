import { Login } from "../04_interfaces/04_4_method_definition_as_interface";
import { User } from "../04_interfaces/04_1_interfaces";

// Alternative of "import" statements - 1
import * as TeslaModel from "../04_interfaces/04_2_func_as_interface_properties";

class Employee5 implements Login{
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

    // This method is defined as interface & the return-type of the function
    login(): User {
        return { name: "Janvi", age: 29, email: "janvi@gmail.com", phone: "0123456789", id: 23 };
    }
}
let emp5: Employee5;
emp5 = new Employee5(23, "Janvi", 29);
console.log(`emp5:`, emp5);
console.log(`emp5.getNameWithAge(): `, emp5.getNameWithAge());
console.log(`emp5 login:`, emp5.login());


// ---------------------- Alternative "import" statements
console.log(`teslaModelX1:`, TeslaModel.teslaModelX1);
console.log(`teslaModelX2:`, TeslaModel.teslaModelX2);
