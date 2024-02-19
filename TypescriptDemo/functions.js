// Type-1 (Plain Function)
function add(num1, num2) {
    return num1 + num2;
}
console.log("Add result:", add(2, 3));
// Type-2 (Arrow Function)
var sub = function (num1, num2) { return num1 - num2; };
console.log("Subtraction result:", sub(10, 2));
// Type-3 (Plain function saved in a variable)
var mul = function (num1, num2) {
    return num1 * num2;
};
console.log("Multiplication result:", mul(2, 3));
