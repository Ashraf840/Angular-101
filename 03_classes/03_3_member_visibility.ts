/* 
**************** IMPORTANT NOTE ****************
To transpile this TS file:  npx tsc -t es5 03_3_member_visibility.ts --outDir ../compiled/03_classes/
*/



// Class member visibility
class Employee6 {
    private _id: number;        // private property; cannot access this from object instance level
    protected name: string;     // protected property; useful while extending the class; avaiable only within the class itself & the child classes; not available in the class-instance level
    age: number;

    // Getter: "id" property
    get empId (): number {
        return this._id;
    }
    // Setter: "id" property
    set empId (id: number) {
        this._id = id;
    }

    constructor(id: number, name: string, age: number) {
        this._id=id;
        this.name=name;
        this.age=age;
    }

    getNameWithAddress () : string {
        return `${this.name} is ${this.age} years old!`;
    }
}

let emp6: Employee6;
emp6 = new Employee6(42, "Himel", 26);
// emp6.name = "John";
// emp6.age = 23;
emp6.empId = 43
console.log(`Employee6 obj:`,emp6);
console.log(`Employee ID:`, emp6.empId);    // calling the empID getter-method wihtout using parenthesis


// EXTENDING THE CLASS / INHERITANCE
// Inherting all the class properties & methods
class Manager extends Employee6 {
    // "age" & "name" can be accessible here; although "name" is Protected member. Since "id" is Private member; it can't be accessible down here
    address: string;
    constructor (id: number, name: string, age: number, address: string) {
        super (id, name, age);
        this.address = address;
    }

    // STATIC METHOD
    static getEmployeeAbsentCount () : number {
        return 26;
    }

    // METHOD OVERRIDING
    getNameWithAddress(): string {
        return `${this.name} is a manager of "${this.address}" branch.`;
    }
}


let mngr: Manager;
mngr = new Manager(23, "Mike", 41, "Cherish Drive");
console.log(`Manager obj:`, mngr);
console.log(`Employee absent count (static-method):`, Manager.getEmployeeAbsentCount());

