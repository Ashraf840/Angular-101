// Optional Parameter
function add_optional_param(num1, num2, num3) {
    return (!num3) ? num1 + num2 : num1 + num2 + num3;
}
console.log("Add result:", add_optional_param(1, 2, 3));
