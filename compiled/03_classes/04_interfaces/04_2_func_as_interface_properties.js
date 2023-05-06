"use strict";
exports.__esModule = true;
exports.teslaModelX2 = exports.teslaModelX1 = void 0;
var teslaModelX1 = {
    length: 196,
    width: 86,
    wheelbase: 116,
    seatingCapacity: 4,
    getTyrePressure: function () {
        return 26; // after some heavy computations
    }
};
exports.teslaModelX1 = teslaModelX1;
console.log("teslaModelX1:", teslaModelX1);
var teslaModelX2 = {
    length: 195,
    width: 87,
    wheelbase: 117,
    seatingCapacity: 2,
    getRemCharging: function () {
        return 78; // after some heavy computations
    }
};
exports.teslaModelX2 = teslaModelX2;
console.log("teslaModelX2:", teslaModelX2);
