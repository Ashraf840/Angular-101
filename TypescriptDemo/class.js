var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var john = new Employee();
john.id = 1;
john.name = "John";
john.address = "14 Hathway";
console.log("John class-object - w/o constructor:", john);
var Employee2 = /** @class */ (function () {
    function Employee2(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    return Employee2;
}());
var doe = new Employee2(2, "Doe", "55 South Avenue");
console.log("Doe class-object - w/ constructor:", doe);
