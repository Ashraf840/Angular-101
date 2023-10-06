// Type (Readonly & Optional Field)
type User2 = {
    readonly _id: number;
    name: string;
    email: string;
    isActive: boolean;
    cardNum?: number;
}

// Define a variable of type User2
let usr2: User2 = {
    _id: 1542,
    name: "Tanjim",
    email: "t@t.com",
    isActive: true,
};

// Modify values in User2 object
usr2.name = "Tanjim Ashraf";
// usr2._id = 1543;     // cannot modify
console.log("User:", usr2);

// Update the cardNum (optional) field
usr2.cardNum = 12145487365654;
console.log("User:", usr2);



// Combine two types
type cardNumber = {
    cardNum: number;
}

type cardDate = {
    cardDate: string;
}

// Add extra field
type cardDetail = cardNumber & cardDate & {
    cvv: number;
}

let cardDesc: cardDetail = {
    cardNum: 54154654654154,
    cardDate: "6/10/23",
    cvv: 5477
};
console.log(cardDesc);


// Nested type inside another type
type User3 = {
    readonly _id: number;
    name: string;
    email: string;
    isActive: boolean;
    cardDesc: cardDetail;
}

let usr3 = {
    _id: 7845,
    name: "Nishi Farzana",
    email: 'n@f.com',
    isActive: false,
    cardDesc: {
        cardNum: 23487239487123,
        cardDate: "4/2/25",
        cvv: 7584
    },
};
console.log(usr3);
// Modify a nested field of type usr3
usr3.cardDesc.cvv = 7585;
console.log(usr3);

