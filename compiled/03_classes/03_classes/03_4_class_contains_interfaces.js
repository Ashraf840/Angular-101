"use strict";
exports.__esModule = true;
var Employee7 = /** @class */ (function () {
    function Employee7(user, userAddress) {
        this.user = user;
        this.userAddress = userAddress;
    }
    // Id
    Employee7.prototype.getEmpId = function () { return this.user["id"]; };
    Employee7.prototype.setEmpId = function (id) { this.user["id"] = id; };
    // Name
    Employee7.prototype.getEmpName = function () { return this.user["name"]; };
    Employee7.prototype.setEmpName = function (name) { this.user["name"] = name; };
    // Age
    Employee7.prototype.getEmpAge = function () { return this.user.age ? this.user.age : -1; };
    Employee7.prototype.setEmpAge = function (age) { this.user["age"] = age; };
    // Email
    Employee7.prototype.getEmpEmail = function () { return this.user.email; };
    Employee7.prototype.setEmpEmail = function (email) { this.user["email"] = email; };
    // Phone
    Employee7.prototype.getEmpPhone = function () { return this.user.phone ? this.user.phone : "null"; };
    Employee7.prototype.setEmpPhone = function (phone) { this.user["phone"] = phone; };
    // Getter-Setter for "User" interface
    Employee7.prototype.getUser = function () { return this.user; };
    Employee7.prototype.setUser = function (user) { this.user = user; };
    // Flat No
    Employee7.prototype.getEmpFlatNo = function () { return this.userAddress["flatNo"] ? this.userAddress["flatNo"] : "null"; };
    Employee7.prototype.setEmpFlatNo = function (flatNo) { this.userAddress["flatNo"] = flatNo; };
    // House No
    Employee7.prototype.getEmpHouseNo = function () { return this.userAddress["houseNo"] ? this.userAddress["houseNo"] : "null"; };
    Employee7.prototype.setEmpHouseNo = function (houseNo) { this.userAddress["houseNo"] = houseNo; };
    // Street
    Employee7.prototype.getEmpStreet = function () { return this.userAddress.street; };
    Employee7.prototype.setEmpStreet = function (street) { this.userAddress["street"] = street; };
    // City
    Employee7.prototype.getEmpCity = function () { return this.userAddress.city; };
    Employee7.prototype.setEmpCity = function (city) { this.userAddress["city"] = city; };
    // Phone
    Employee7.prototype.getEmpState = function () { return this.userAddress.state; };
    Employee7.prototype.setEmpState = function (state) { this.userAddress["state"] = state; };
    // Getter-Setter for "UserAddress" interface
    Employee7.prototype.getUserAddress = function () { return this.userAddress; };
    Employee7.prototype.setUserAddress = function (userAddress) { this.userAddress = userAddress; };
    return Employee7;
}());
var emp7 = new Employee7({ name: "Humayun", age: 30, email: "humayun@gmail.com", phone: "0123456789", id: 14 }, { flatNo: "8WB/C", houseNo: "Shurovi", street: "Bottola", city: "Dhaka", state: "Dhaka", postCode: 1229 });
console.log("Employee ID:", emp7.getEmpId());
console.log("Employee Name:", emp7.getEmpName());
console.log("Employee Age:", emp7.getEmpAge());
console.log("Employee Email:", emp7.getEmpEmail());
console.log("Employee Phone:", emp7.getEmpPhone());
console.log("--------------------------------------");
console.log("Employee's \"User\" interface values):", emp7.getUser());
emp7.setUser({ name: "Hasnat", age: 28, email: "hasnat@gmail.com", phone: "0123456789", id: 15 });
console.log("Employee (after modifying \"User\" interface values):", emp7.getUser());
console.log("--------------------------------------");
console.log("Employee's \"UserAddress\" interface values):", emp7.getUserAddress());
emp7.setUserAddress({ flatNo: "12BE/7", houseNo: "Laboni", street: "Bottola", city: "Dhaka", state: "Dhaka", postCode: 1229 });
console.log("Employee (after modifying \"UserAddress\" interface values):", emp7.getUserAddress());
