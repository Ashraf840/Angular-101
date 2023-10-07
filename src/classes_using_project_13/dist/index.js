"use strict";
console.log("Learning classes in TypeScript!");
class User {
    constructor(email, name, haveCreditCard = false, phone) {
        this.city = "Jaipur";
        this.email = email;
        this.name = name;
        this.haveCred = haveCreditCard;
        this.contact = phone;
    }
}
let usr = new User('h', 'h@h.com');
console.log("usr object:", usr);
