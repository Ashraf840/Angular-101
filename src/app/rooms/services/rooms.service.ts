import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: "Delux Room",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 500,
      photos: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      checkinTime: new Date('06-Dec-2022'),
      checkoutTime: new Date('08-Dec-2022'),
      rating: 4.5,
    },
    {
      roomNumber: 2,
      roomType: "Double Delux Room",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen, Playstation, Twin Beds",
      price: 1000,
      photos: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      checkinTime: new Date('07-Dec-2022'),
      checkoutTime: new Date('09-Dec-2022'),
      rating: 3.57452,
    },
    {
      roomNumber: 3,
      roomType: "Private Suite",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen, Playstation, VR-box, Indoor Swimming Pool",
      price: 15000,
      photos: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      checkinTime: new Date('10-Dec-2022'),
      checkoutTime: new Date('18-Dec-2022'),
      rating: 2.6,
    },
  ];

  getRooms() {
    return this.roomList;
  }

  constructor() { 
    // Demonstrate "Singleton" pattern
    console.log(`"RoomsService" service is called!`)
  }
}
