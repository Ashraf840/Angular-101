import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms'

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = "Hilton Hotel";
  numOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5
  };

  showRoomListJson = false; // Checking JsonPipe (Pipes)
  roomList: RoomList[] = [];

  selectedRoom!: RoomList;

  constructor() { }

  ngOnInit(): void {
    this.roomList = [
      {
        "id": "65d58f008a4ac953b95825a7",
        "roomType": "Single",
        "amenities": [
          "Charging Station",
          "Beer",
          "Snacks Basket"
        ],
        "price": 600,
        "picture": "https://www.istockphoto.com/photo/luxurious-modern-bedroom-with-blank-boxes-for-your-design-gm97084449-12119394",
        "checkinTime": "2011-09-30T12:47:48.797Z",
        "checkoutTime": "2010-07-25T18:43:16.676Z"
      },
      {
        "id": "65d58f00c3ceb1c23ea5d1cb",
        "roomType": "Suite",
        "amenities": [
          "Slippers",
          "Beer"
        ],
        "price": 800,
        "picture": "https://www.istockphoto.com/photo/hotel-room-gm183360854-15135140",
        "checkinTime": "2015-12-04T23:58:19.729Z",
        "checkoutTime": "2012-11-24T02:00:41.833Z"
      },
      {
        "id": "65d58f00e868d4b0c2b455c2",
        "roomType": "Suite",
        "amenities": [
          "Slippers",
          "Beer",
          "Live Kitchen"
        ],
        "price": 1500,
        "picture": "https://www.istockphoto.com/photo/comfortable-room-gm133983218-18290760",
        "checkinTime": "2011-07-08T11:23:57.301Z",
        "checkoutTime": "2011-03-29T23:20:38.194Z"
      },
      {
        "id": "65d58f00a3e3bdb69781f489",
        "roomType": "Double",
        "amenities": [
          "Toiletries",
          "Complementary Breakfast"
        ],
        "price": 1200,
        "picture": "https://www.istockphoto.com/photo/comfortable-room-gm133983218-18290760",
        "checkinTime": "2014-12-26T13:07:47.194Z",
        "checkoutTime": "2013-12-27T04:42:09.715Z"
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms; // Assigns the opposite value each time this method gets invoked
  }

  selectRoom(room: RoomList) {
    console.log("Emitted from parent class!");
    console.log(room);
    this.selectedRoom = room;
  }

}
