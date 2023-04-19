// generic func-1
function getItems(items) {
    return new Array().concat(items);
}
var concatResult = getItems([1, 2, 3, 4, 5]);
console.log("concatResult:", concatResult);
var concatString = getItems(["a", "b", "c", "d", "e"]);
console.log("concatString:", concatString);
