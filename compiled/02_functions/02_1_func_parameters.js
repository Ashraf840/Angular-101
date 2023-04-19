var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Optional Parameter
// "num3" is optional param; use the optional-param inside the function through ternary-operator
function add2(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log('Addition (3 params):', add2(3, 4, 5));
console.log('Addition (2 params):', add2(3, 5));
// Required Parameter
// "num3" is required param; thus a default value is defined
var sub2 = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 10; }
    return num1 - num2 - num3;
};
console.log('Suntraction (3 param):', sub2(50, 20, 20));
console.log('Suntraction (2 param):', sub2(50, 20));
// Rest Parameter
// To pass n-number of parameters, use 3-dots (...) as prefix
function add3(num1, num2) {
    var num3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        num3[_i - 2] = arguments[_i];
    }
    return num1 + num2 + num3.reduce(function (acc, curr) { return acc + curr; });
}
var numbers = [1, 2, 3, 4, 5];
console.log('Total (rest param):', add3.apply(void 0, __spreadArray([10, 20], numbers, false))); // Type-1 of passing rest params
console.log('Total (rest param):', add3.apply(void 0, __spreadArray([10, 20], [1, 2, 3, 4, 5], false))); // Type-2 of passing rest params
console.log('Total (rest param):', add3(10, 20, 1, 2, 3, 4, 5)); // Type-3 of passing rest params
