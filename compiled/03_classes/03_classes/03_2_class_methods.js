"use strict";
exports.__esModule = true;
var Employee5 = /** @class */ (function () {
    function Employee5(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Employee5.prototype.getNameWithAge = function () {
        return this.name + "; " + this.age;
    };
    // This method is defined as interface, also the return-type of the func
    Employee5.prototype.login = function () {
        return { name: "Janvi", age: 29, email: "janvi@gmail.com", phone: "0123456789", id: 23 };
    };
    return Employee5;
}());
var emp5;
emp5 = new Employee5(23, "Janvi", 29);
console.log("emp5:", emp5);
console.log(emp5.getNameWithAge());
console.log("emp5 login:", emp5.login());
