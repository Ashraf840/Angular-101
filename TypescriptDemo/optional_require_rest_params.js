var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1 - Optional Parameter
function add_optional_param(num1, num2, num3) {
    return (!num3) ? num1 + num2 : num1 + num2 + num3;
}
console.log("Add result:", add_optional_param(1, 2, 3));
// 2 - Required Parameter / Default Value
var mul_required_param = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 10; }
    return num1 * num2 * num3;
};
console.log("Multiplication result - 2 params passed:", mul_required_param(2, 3));
console.log("Multiplication result - 3 params passed:", mul_required_param(2, 3, 5));
// 3 - Rest Parameters / n-number of params
// NB: Pass rest of the numbers as parameters using rest operator
function add_rest_parameter(num1, num2) {
    var num = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        num[_i - 2] = arguments[_i];
    }
    return num1 + num2 + num.reduce(function (acc, cnum) { return acc + cnum; });
}
// Require to pass array-of-numbers using rest-operator
var num_array_for_rest_param;
num_array_for_rest_param = [1, 2, 3, 4, 5];
console.log("Add result - rest param:", add_rest_parameter.apply(void 0, __spreadArray([1, 2], num_array_for_rest_param, false)));
console.log("Add result - simplify:", add_rest_parameter(1, 2, 1, 2, 3, 4, 5));
// Generic Functions
// Write a function which can take an array of number / string, concat them return the result
function concatItems(item) {
    return new Array().concat(item);
}
console.log("Concat numbers - generic func:", concatItems([1, 2, 3, 4, 5]));
console.log("Concat string - generic func:", concatItems(['a', 'b', 'c', 'd', 'e']));
