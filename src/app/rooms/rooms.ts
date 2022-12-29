// Interface in Angular: 
// Interface is a specification that identifies a related set of properties and methods 
// to be implemented by a class. So basically using interface you can set some basic rules 
// for your properties and methods using class.
// Use to create user-defined data-types & rules for the properties & methods uisng class.
// NB: Making all the properties optional for understanding optional chaining while a shallow 'room' obj gets created.
export interface Room {
    totalRooms?: number;
    avaiableRooms?: number;
    bookedRooms?: number;
}


// RoomList Interface; this datatype will be used to build an array
export interface RoomList {
    roomNumber: number,
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
    rating: number;
}

