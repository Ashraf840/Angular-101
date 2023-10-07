// Declare a variable of either types
let num: number | string = 15;
console.log("num:", typeof (num));
num = "15";
console.log("num:", typeof (num));


// Define two types for User & admin
type User4 = {
    name: string;
    isActive: boolean;
}

type Admin = {
    username: string;
    isActive: boolean;
}

let usr: User4 | Admin = {
    name: "Tanjim",
    isActive: true,
};
console.log("typeof(usr):", typeof (usr));
console.log("as user:", usr);

usr = {
    username: "tanjim840",
    isActive: false,
};
console.log("typeof(usr):", typeof (usr));
console.log("as admin:", usr);