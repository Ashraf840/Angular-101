/*
    Avoid the error:  The error "Property has no initializer and is not definitely assigned in the constructor" occurs when we declare a class property without initializing it.
*/
// Type of defining class-properties-1: set default values
var Employee1 = /** @class */ (function () {
    function Employee1() {
        this.id = 1;
        this.name = "Rebecca";
        this.age = 27;
    }
    return Employee1;
}());
var emp1;
emp1 = new Employee1();
console.log("emp1:", emp1);
// Type of defining class-properties-2: non-null assertion operator
var Employee2 = /** @class */ (function () {
    function Employee2() {
    }
    return Employee2;
}());
var emp2;
emp2 = new Employee2();
emp2.id = 2;
emp2.name = "Badhon";
emp2.age = 29;
console.log("emp2:", emp2);
// Type of defining class-properties-3: Provide initial values inside of the class's constructor
var Employee3 = /** @class */ (function () {
    function Employee3(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    return Employee3;
}());
var emp3 = new Employee3(12, "Alex", 18);
console.log("emp3", emp3);
// Type of defining class-properties-4: Make the class properties as optional
var Employee4 = /** @class */ (function () {
    function Employee4() {
    }
    return Employee4;
}());
var emp4 = new Employee4();
emp4.id = 31;
emp4.name = "Raisul";
emp4.age = 32;
console.log("emp4", emp4);
