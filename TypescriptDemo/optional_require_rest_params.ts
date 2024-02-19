// Optional Parameter
function add_optional_param(num1: number, num2: number, num3?: number): number {
    return (!num3) ? num1 + num2 : num1 + num2 + num3;
}
console.log("Add result:", add_optional_param(1, 2, 3));
