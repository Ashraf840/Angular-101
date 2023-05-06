"use strict";
exports.__esModule = true;
// Alternative of "import" statements - 1
var TeslaModel = require("../04_interfaces/04_2_func_as_interface_properties");
var Employee5 = /** @class */ (function () {
    function Employee5(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Employee5.prototype.getNameWithAge = function () {
        return this.name + "; " + this.age;
    };
    // This method is defined as interface & the return-type of the function
    Employee5.prototype.login = function () {
        return { name: "Janvi", age: 29, email: "janvi@gmail.com", phone: "0123456789", id: 23 };
    };
    return Employee5;
}());
var emp5;
emp5 = new Employee5(23, "Janvi", 29);
console.log("emp5:", emp5);
console.log("emp5.getNameWithAge(): ", emp5.getNameWithAge());
console.log("emp5 login:", emp5.login());
// ---------------------- Alternative "import" statements
console.log("teslaModelX1:", TeslaModel.teslaModelX1);
console.log("teslaModelX2:", TeslaModel.teslaModelX2);
