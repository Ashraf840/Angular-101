// Type alias is useful while passing an object type into a function.
// Better approach to define an object is to use type aliases.
// Define User1 type param into the function; return the User1 type object
function createUser(user) {
    return { name: "Tanjim Ashraf", email: "t@t.com", isActive: true };
}
// Thus, while this is invoked, pass the User1 type object
console.log(createUser({ name: "Tanjim", email: "t@t.com", isActive: false }));
