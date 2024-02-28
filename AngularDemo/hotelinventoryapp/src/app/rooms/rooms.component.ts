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
import { RoomService } from './services/room.service';

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

  hideRoomList = false;

  // @ViewChild(HeaderComponent, {'static': true})  // Only use static=true if we're sure no asynchronous code is written inside that component. That time we can event access this component inside the "ngOnInit()" lifecycle hook.
  @ViewChild(HeaderComponent)
  header!: HeaderComponent; // Instantiate component of the same hierarchy

  // Access all the instances of "HeaderComponent" using @ViewChildren() decorator
  // "static" property is by default false & cannot be altered. Thus the array of component-instances can be accessed only from "ngAfterViewInit()" lifecycle hook.
  @ViewChildren(HeaderComponent)
  headerChildren!: QueryList<HeaderComponent>;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {

    console.log("HeaderComponent (ngOnInit):", this.header); // Output: undefined; since explicitly not defining "static=true", which indicates, that the dev of the component is unsure whether there is any asynchronous codes on that component
    // NB: This is safe to access the "header" component-variable in the "AfterViewInit" lifecycle hook of this component.

    // Assign the room-service function to get all data into a variable here.
    this.roomList = this.roomService.getRooms();

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

  hideRoomList_handler() {
    this.hideRoomList = !this.hideRoomList;
  }

}
