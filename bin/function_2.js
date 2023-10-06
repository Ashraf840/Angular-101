/*
 * Type annotation is optional while using using variables, but it's compulsary while using functions to avoid unnecessary probable errors in future.
 */
function addNum(num) {
    return num + 2;
}
console.log("addNum():", addNum(5));
function getUpper(val) {
    return val.toUpperCase();
}
console.log("getUpper():", getUpper("Tanjim"));
// Default value to param
function signup(username, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    if (isPaid) {
        console.log("Congratulation \"".concat(username, "\"! You've successfully signed up for this paid course!"));
    }
    else {
        console.log("Congratulation \"".concat(username, "\"! You've successfully signed up for this free course!"));
    }
}
signup("TanjimAshraf", 'tanjim@gmail.com', true);
// Define the return type of the function
function getName() {
    return "Cannot return any other type rather than a string!";
}
console.log(getName());
// Arrow function
var getHellow = function (name) { return "Hello ".concat(name); };
console.log(getHellow("Tasnim"));
// [Array Map] TypeScript is smart enough to know the type of each elem from the array
console.log();
var heros = ["Thor", "Spirderman", "Superman"];
heros.map(function (hero) {
    console.log(hero);
});
