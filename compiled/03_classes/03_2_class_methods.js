var Employee5 = /** @class */ (function () {
    function Employee5(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Employee5.prototype.getNameWithAge = function () {
        return this.name + "; " + this.age;
    };
    return Employee5;
}());
var emp5;
emp5 = new Employee5(23, "Janvi", 29);
console.log("emp5:", emp5);
console.log(emp5.getNameWithAge());
