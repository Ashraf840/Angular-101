var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    Employee2.prototype.getNameWithAddress = function () {
        return "".concat(this.name, " stays at ").concat(this.address);
    };
    return Employee2;
}());
var doe = new Employee2(2, "Doe", "55 South Avenue");
console.log("Doe class-object - w/ constructor:", doe);
console.log(doe.getNameWithAddress());
// Class Inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, address) {
        return _super.call(this, id, name, address) || this;
    }
    Manager.prototype.getNameWithAddress = function () {
        return "".concat(this.name, " is the manager at ").concat(this.address);
    };
    return Manager;
}(Employee2));
var mike = new Manager(3, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());
