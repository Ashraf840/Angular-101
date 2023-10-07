// Retrict user choices through using enums
// By default, the fields of an enum get indexed from 0. But, we can change the value of fields for our usecase
var AirbusSeatChoice;
(function (AirbusSeatChoice) {
    AirbusSeatChoice[AirbusSeatChoice["AISLE"] = 0] = "AISLE";
    AirbusSeatChoice[AirbusSeatChoice["MIDDLE"] = 1] = "MIDDLE";
    AirbusSeatChoice[AirbusSeatChoice["WINDOW"] = 2] = "WINDOW";
    AirbusSeatChoice[AirbusSeatChoice["FOURTH"] = 3] = "FOURTH";
})(AirbusSeatChoice || (AirbusSeatChoice = {}));
;
var hcSeat = AirbusSeatChoice.AISLE;
console.log(hcSeat);
;
var hcSeat2 = 30 /* AirbusSeatChoice2.WINDOW */;
console.log(hcSeat2);
