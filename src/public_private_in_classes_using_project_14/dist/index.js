"use strict";
console.log("Learning public & private of classes in TypeScript!");
// Non professional approach of using PRIAVTE & PUBLIC
class User {
    constructor(email, name, haveCreditCard = false, phone) {
        this.city = "Jaipur";
        this._email = email; // can access inside the class scope
        this.name = name;
        this._haveCred = haveCreditCard; // can access inside the class scope
        this.contact = phone;
    }
}
let usr = new User('h', 'h@h.com');
// usr._email = 't@t.com';     // cannot be accessed nor modified outside of the class User scope, since it's priavte
console.log("usr object:", usr);
// Professional approach of using PRIAVTE & PUBLIC
class User2 {
    constructor(_email, name, _haveCreditCard = false, phone) {
        this._email = _email;
        this.name = name;
        this._haveCreditCard = _haveCreditCard;
        this.phone = phone;
        this.city = "Jaipur";
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
