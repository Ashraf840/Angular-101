// Type alias is useful while passing an object type into a function.
// Better approach to define an object is to use type aliases.

// Type (Abstract variable)
type User = {
    name: string;
    email: string;
    isActive: boolean;
}


// Define User type param into the function; return the User type object
function createUser(user: User): User {
    return { name: "Tanjim Ashraf", email: "t@t.com", isActive: true };
}

// Thus, while this is invoked, pass the User type object
createUser({ name: "Tanjim", email: "t@t.com", isActive: false });
