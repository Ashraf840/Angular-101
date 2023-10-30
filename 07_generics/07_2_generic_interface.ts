// Generics (In Interface)
// Video Ref: https://www.youtube.com/watch?v=IOzkOXSz9gE
// Timestamp: 5:27 ~ 9:43

// Static Interface
interface Resource_1 {
    uid: number;
    resourceName: string;
    data: object;   // Required to make the data type flexible; thus we can use generics
}

let resource_1: Resource_1 = {
    uid: 234,
    resourceName: 'Person',
    // data: 'eudora'   // Throws error, since the data field expects an objects (or array or tuple)
    // data: ['shaun', 'eliza', 'robin'],  // array is OK
    data: { name: 'Asib', age: 25 },
};

console.log(`resource_1:`, resource_1);


// Generic Interface
interface Resource_2<T> {
    uid: number;
    resourceName: string;
    data: T;
}

// Define the type argument since the interface is generic; data field of type string
let resource_2: Resource_2<string> = {
    uid: 543,
    resourceName: 'shoppingAddress',
    data: `185/3 Tejkunipara, Tejgaon, Dhaka`
}

console.log(`resource_2 (data as type string):`, resource_2);


// Interface with data field of type array of string; same Resource_2 interface
let resource_2_1: Resource_2<string[]> = {
    uid: 122,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'toilet roll'],
}

console.log(`resource_2_1 (data as type array of string):`, resource_2_1);


// Interface with data field of type array of number; same Resource_2 interface
let resource_2_2: Resource_2<number[]> = {
    uid: 433,
    resourceName: 'heights',
    data: [5.67, 5.78, 6.2, 5.9, 6, 4.10, 5.10],
}

console.log(`resource_2_2 (data as type array of number):`, resource_2_2);