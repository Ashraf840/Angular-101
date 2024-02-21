export interface Room {
    totalRooms: number;
    availableRooms: number;
    bookedRooms?: number;
}

export interface RoomList {
    id: string;
    roomType: string;
    amenities: string[];
    price: number;
    picture: string;
    checkinTime: string;
    checkoutTime: string;
}