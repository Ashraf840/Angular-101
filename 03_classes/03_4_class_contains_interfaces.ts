import { User, UserAddress } from "../04_interfaces/04_1_interfaces";

class Employee7 {
    protected user: User;
    protected userAddress: UserAddress;
    constructor(user: User, userAddress: UserAddress) {
        this.user = user;
        this.userAddress = userAddress;
    }
    // Id
    getEmpId(): number { return this.user["id"]; }
    setEmpId(id: number) { this.user["id"]=id; }
    // Name
    getEmpName(): string { return this.user["name"]; }
    setEmpName(name: string) { this.user["name"]=name; }
    // Age
    getEmpAge(): number { return this.user.age? this.user.age: -1; }
    setEmpAge(age: number) { this.user["age"]=age; }
    // Email
    getEmpEmail(): string { return this.user.email; }
    setEmpEmail(email: string) { this.user["email"]=email; }
    // Phone
    getEmpPhone(): string { return this.user.phone? this.user.phone: "null"; }
    setEmpPhone(phone: string) { this.user["phone"]=phone; }
    // Getter-Setter for "User" interface
    getUser(): User { return this.user; }
    setUser(user: User) { this.user=user; }

    // Flat No
    getEmpFlatNo(): string { return this.userAddress["flatNo"]? this.userAddress["flatNo"] : "null"; }
    setEmpFlatNo(flatNo: string) { this.userAddress["flatNo"]=flatNo; }
    // House No
    getEmpHouseNo(): string { return this.userAddress["houseNo"] ? this.userAddress["houseNo"] : "null"; }
    setEmpHouseNo(houseNo: string) { this.userAddress["houseNo"]=houseNo; }
    // Street
    getEmpStreet(): string { return this.userAddress.street; }
    setEmpStreet(street: string) { this.userAddress["street"]=street; }
    // City
    getEmpCity(): string { return this.userAddress.city; }
    setEmpCity(city: string) { this.userAddress["city"]=city; }
    // Phone
    getEmpState(): string { return this.userAddress.state; }
    setEmpState(state: string) { this.userAddress["state"]=state; }
    // Getter-Setter for "UserAddress" interface
    getUserAddress(): UserAddress { return this.userAddress; }
    setUserAddress(userAddress: UserAddress) { this.userAddress=userAddress; }
}

let emp7 = new Employee7(
    { name: "Humayun", age: 30, email: "humayun@gmail.com", phone: "0123456789", id: 14 },
    { flatNo: "8WB/C", houseNo: "Shurovi", street: "Bottola", city: "Dhaka", state: "Dhaka", postCode: 1229 },
)

console.log(`Employee ID:`, emp7.getEmpId());
console.log(`Employee Name:`, emp7.getEmpName());
console.log(`Employee Age:`, emp7.getEmpAge());
console.log(`Employee Email:`, emp7.getEmpEmail());
console.log(`Employee Phone:`, emp7.getEmpPhone());

console.log(`--------------------------------------`);

console.log(`Employee's "User" interface values):`, emp7.getUser());
emp7.setUser( { name: "Hasnat", age: 28, email: "hasnat@gmail.com", phone: "0123456789", id: 15 } );
console.log(`Employee (after modifying "User" interface values):`, emp7.getUser());


console.log(`--------------------------------------`);

console.log(`Employee's "UserAddress" interface values):`, emp7.getUserAddress());
emp7.setUserAddress( { flatNo: "12BE/7", houseNo: "Laboni", street: "Bottola", city: "Dhaka", state: "Dhaka", postCode: 1229 } );
console.log(`Employee (after modifying "UserAddress" interface values):`, emp7.getUserAddress());
