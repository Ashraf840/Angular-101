// Define a param which accepts either number or string type of data. Handle both data inside the method by using type checking.
function getDbId(id) {
    if (typeof id === "number") {
        console.log(id.toFixed());
    }
    if (typeof id === "string") {
        console.log(id.toLowerCase());
    }
}
getDbId(5);
getDbId("5");
// Array which can hold either types 
var arr_1 = ['a', 'b', 'c', 'd'];
var arr_2 = [1, 2, 3, 4, 5];
var arr_3 = ['a', 2, 'c', 4];
var arr_4 = [1, 'b', 3, 'd'];
console.log(arr_1);
console.log(arr_2);
console.log(arr_3);
console.log(arr_4);
// Literal type of assignment: The var cannot have anything else other than the following defined types
var seatAllotmentAirbus;
seatAllotmentAirbus = "aisle";
// seatAllotmentAirbus = "crew";   // Not assignable; can only assign from within the 3 defined types
