// Functions as Interface properties
interface TeslaModelX {
    length: number;                     // REQUIRED
    width: number;                      // REQUIRED
    wheelbase: number;                  // REQUIRED
    seatingCapacity: number;            // REQUIRED
    getTyrePressure?: () => number;     // OPTIONAL; this func must returns a number
    getRemCharging?: () => number;      // OPTIONAL; this func must returns a number
}


let teslaModelX1: TeslaModelX = {
    length: 196,
    width: 86,
    wheelbase: 116,
    seatingCapacity: 4,
    getTyrePressure: (): number => {
        return 26;      // after some heavy computations
    }
};
console.log(`teslaModelX1:`, teslaModelX1);


let teslaModelX2: TeslaModelX = {
    length: 195,
    width: 87,
    wheelbase: 117,
    seatingCapacity: 2,
    getRemCharging: (): number => {
        return 78;      // after some heavy computations
    }
};
console.log(`teslaModelX2:`, teslaModelX2);

