console.log("Learning public & private of classes in TypeScript!");


// Non professional approach of using PRIAVTE & PUBLIC
class User {
    /*
     * TS prefers to know the type of attributes in advance before assigning them inside the constructor, 
     * but we can use a more professional approach by defining them inside the param, in this way, 
     * we don't have to assign them explicitly inside the constructor. It's a SYNTACTICAL SUGAR.
     */
    private _email: string;
    name: string;
    readonly city: string = "Jaipur";
    private _haveCred: boolean;              // used for param w/ default value
    contact: string | undefined;    // used for optional param
    constructor(email: string, name: string, haveCreditCard: boolean = false, phone?: string) {
        this._email = email;     // can access inside the class scope
        this.name = name;
        this._haveCred = haveCreditCard;     // can access inside the class scope
        this.contact = phone;
    }
}
let usr = new User('h', 'h@h.com');
// usr._email = 't@t.com';     // cannot be accessed nor modified outside of the class User scope, since it's priavte
console.log("usr object:", usr);



// Professional approach of using PRIAVTE & PUBLIC
class User2 {
    readonly city: string = "Jaipur";
    constructor(
        private _email: string,
        public name: string,
        private _haveCreditCard: boolean = false,
        public phone?: string) {
        console.log("SYNTACTICAL SUGAR");
        console.log("email:", this._email);
        console.log("email:", this.name);
        console.log("email:", this._haveCreditCard);
        console.log("email:", this.phone);
        console.log("email:", this.city);
    }
}

let usr2 = new User2('t', 't@t.com', true, '+880-188-070-0531');
console.log("usr2 object:", usr2);
