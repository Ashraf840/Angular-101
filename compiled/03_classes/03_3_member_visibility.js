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
// Class member visibility
var Employee6 = /** @class */ (function () {
    // Setter: "id" property
    // set empId (id: number) {
    //     this._id = id;
    // }
    function Employee6(id, name, age) {
        this._id = id;
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Employee6.prototype, "empId", {
        // Getter: "id" property
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Employee6.prototype.getNameWithAddress = function () {
        return "".concat(this.name, " is ").concat(this.age, " years old!");
    };
    return Employee6;
}());
var emp6;
emp6 = new Employee6(42, "Himel", 26);
// emp6.name = "John";
// emp6.age = 23;
console.log("Employee6 obj:", emp6);
console.log("Employee ID:", emp6.empId);
// EXTENDING THE CLASS / INHERITANCE
// Inherting all the class properties & methods
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, age, address) {
        var _this = _super.call(this, id, name, age) || this;
        _this.address = address;
        return _this;
    }
    // STATIC METHOD
    Manager.getEmployeeAbsentCount = function () {
        return 26;
    };
    // METHOD OVERRIDING
    Manager.prototype.getNameWithAddress = function () {
        return "".concat(this.name, " is a manager of \"").concat(this.address, "\" branch.");
    };
    return Manager;
}(Employee6));
var mngr;
mngr = new Manager(23, "Mike", 41, "Cherish Drive");
console.log("Manager obj:", mngr);
console.log("Employee absent count (static-method):", Manager.getEmployeeAbsentCount());
