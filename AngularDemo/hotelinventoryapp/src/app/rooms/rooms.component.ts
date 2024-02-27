import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {

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
  tableTitle = "Rooms List";

  // @ViewChild(HeaderComponent, {'static': true})  // Only use static=true if we're sure no asynchronous code is written inside that component. That time we can event access this component inside the "ngOnInit()" lifecycle hook.
  @ViewChild(HeaderComponent)
  header!: HeaderComponent; // Instantiate component of the same hierarchy

  // Access all the instances of "HeaderComponent" using @ViewChildren() decorator
  // "static" property is by default false & cannot be altered. Thus the array of component-instances can be accessed only from "ngAfterViewInit()" lifecycle hook.
  @ViewChildren(HeaderComponent)
  headerChildren!: QueryList<HeaderComponent>;

  constructor() { }

  ngOnInit(): void {

    console.log("HeaderComponent (ngOnInit):", this.header); // Output: undefined; since explicitly not defining "static=true", which indicates, that the dev of the component is unsure whether there is any asynchronous codes on that component
    // NB: This is safe to acces in the "AfterViewInit" lifecycle hook of this component.

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

  ngAfterViewInit() {
    // Pre-requisite to access the properties of another component even after invoking from inside the "ngAfterViewInit()" hook?
    // - Require to invoke the "HeadComponent's selector tag "hinv-header" should be defined in this RoomComponent's HTML template.
    // The properties with the '@ViewChild()" decorator can safely be accessed in this inteface (Mostly helpful for the "@ViewChild()" decorators without "static=true" defined explicitly).
    console.log("HeaderComponent (ngAfterViewInit):", this.header);
    // this.header.title = "Rooms View - Header Title";  // Throws an error "ExpressionChangedAfterItHasBeenCheckedError" which can be ignored in the development mode. 
    // Thus make modification of properties of fetched component should be made inside the "ngAfterViewchecked" lifecycle hook.

    console.log("Array of same instances (HeaderComponent):", this.headerChildren);
    console.log("Header instance (last)", this.headerChildren.last)
    console.log("Header instance (get 2nd instance):", this.headerChildren.get(1));
  }

  ngAfterViewChecked() {
    this.header.title = "Rooms View - Header Title (First instance - Grabbed by @ViewChild)";  // Still I'll get the error, but it's ok in dev mode, not ok in production mode.
    // Error: ExpressionChangedAfterItHasBeenCheckedError

    // TODO: Modify the 2nd instance of the header component's title


    // Change the last instance of HeaderComponent's title
    this.headerChildren.last.title = "Rooms View - Header (Last instance - Grabbed by @ViewChildren)";
  }

  toggle() {
    this.hideRooms = !this.hideRooms; // Assigns the opposite value each time this method gets invoked
    this.tableTitle = this.tableTitle.toUpperCase();
  }

  selectRoom(room: RoomList) {
    console.log("Emitted from parent class!");
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    let room = {
      "id": "65d58f00c3ceb1c23eqpw3de",
      "roomType": "Suite",
      "amenities": [
        "Slippers",
        "Beer",
        "Desktop PC"
      ],
      "price": 900,
      "picture": "https://www.istockphoto.com/photo/hotel-room-gm183360854-15135140",
      "checkinTime": "2015-12-04T23:58:19.729Z",
      "checkoutTime": "2012-11-24T02:00:41.833Z"
    };
    // this.roomList.push(room); // Mutates the "roomList" array, which will not effect the child component showing this array in a tabular formatl, since "OnPush" change detection is added
    this.roomList = [...this.roomList, room]; // Since, it's now required to pass a new instance of the property (roomList), a new instance is created this way
  }
}
