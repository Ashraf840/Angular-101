// Retrict user choices through using enums
// By default, the fields of an enum get indexed from 0. But, we can change the value of fields for our usecase
enum AirbusSeatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
    FOURTH
};
let hcSeat = AirbusSeatChoice.AISLE;
console.log(hcSeat);

// To avoid producing to much JS code while transpiled, use const while declaring an enum
const enum AirbusSeatChoice2 {
    AISLE = 10,
    MIDDLE = 20,
    WINDOW = 30,
    FOURTH = 40
};
let hcSeat2 = AirbusSeatChoice2.WINDOW;
console.log(hcSeat2);