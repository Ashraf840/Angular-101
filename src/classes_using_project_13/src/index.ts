console.log("Learning classes in TypeScript!");

class User {
    // TS prefers to know the type of attributes in advance before assigning them into the constructor
    email: string;
    name: string;
    readonly city: string = "Jaipur";
    haveCred: boolean;              // used for param w/ default value
    contact: string | undefined;    // used for optional param
    constructor(email: string, name: string, haveCreditCard: boolean = false, phone?: string) {
        this.email = email;
        this.name = name;
        this.haveCred = haveCreditCard;
        this.contact = phone;
    }
}

let usr = new User('h', 'h@h.com');
console.log("usr object:", usr);

