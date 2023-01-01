import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';   // Room, RoomList interfaces
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName: string = 'Hilton Hotel';
  numOfRooms: number = 10;

  hideRooms = false;  // initialized with "false", since it'll be attached to the div property "hidden"

  // Show / Hide rooms func
  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  // Build room object using interface in "rooms.ts".
  // Optional chaining, thus make the properties of "Room" interface optional.
  room: Room = {
    totalRooms: 20,
    avaiableRooms: 10,
    bookedRooms: 5,
  };

  // Declaration of "RoomList" Type Array
  // Moved the value of the array into "ngOnInit"; here, just declare the typed-array as variable.
  roomList: RoomList[] = [];

  jsonView: boolean = false;
  // View Json ('toggle' func)
  josnViewToggle() {
    this.jsonView = !this.jsonView;
  }

  selectedRoom_P!: RoomList;    // [DON'T Know about the suffix "!"]
  closeRoomList: boolean = false;
  // select Room local func, to get the emmited data from the child-component func
  selectRoom(room: RoomList) {
    this.selectedRoom_P = room;
    // console.log(`Selected Room:`, room);
    this.closeRoomList ? this.closeRoomList = false : true;   // make the "closeRoomList" status to false again
    console.log(`"closeRoomList" status`, this.closeRoomList);
  }

  closeRoomListInfo() {
    this.closeRoomList = !this.closeRoomList;
    console.log(`"closeRoomList" status`, this.closeRoomList);
    // console.log(`Close roomList info as Json format:`, this.selectedRoom_P);
  }

  // Add new room func (static data)
  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: "Delux Room",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 700,
      photos: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      checkinTime: new Date('04-Dec-2022'),
      checkoutTime: new Date('06-Dec-2022'),
      rating: 4.5,
    };
    // this.roomList.push(room);   // push the obj-elem to the end of the array, doen't work with "OnPush" changeDetectionStrategy
    this.roomList = [...this.roomList, room];
  }

  title: string = "Room List Table";
  changeRoomListTitle() {
    this.title === "Room List Table" ? this.title = "Rooms List" : 
      this.title === "Rooms List" ? this.title = "Room List Table" : true;
  }

  // Constructor: should be used only when we want to inject some services.
  // Inject (Dependency Injection) "RoomsService" instance & it'd be private.
  // By following the "Singleton" pattern, the "RoomsService" is getting used as the GLOBAL instance of the service.
  constructor(private roomsService: RoomsService) {}

  // @ViewChild works with the first instance inside the template
  // "ViewChild" decorator: to access property of other component (which is directly not the child-component of this component)
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent; // by default, static=false; can be accessed inside the "ngAfterViewInit" lifecycle hook.
  // @ViewChild(HeaderComponent) headerComponent: HeaderComponent = new HeaderComponent;
  // @ViewChild(HeaderComponent, { static: false }) headerComponent!: HeaderComponent;  // doesn't require to define explcitly about the static=false. Disallow to load the properties of "HeaderComponent" component into "ngOnInit". component can be accessed only inside the "ngAfterViewInit" hook.
  // @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;  // allow to load the properties of "HeaderComponent" component into "ngOnInit". It's safe to use "static"=true since "header" component doesn't contain any asynchronous code yet.
  // Error: Property 'headerComponent' has no initializer and is not definitely assigned in the constructor.
  // Solution: to avoid such error, put an exclamation mark ("!") as suffix. Add definite assignment assertion to this property.

  // @ViewChildren works with multiple instances inside the template, "static=false" is fixed.
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  // "ngAfterViewInit" lifecycle hook: this method is only get called imediately after the view has been initialized.
  ngAfterViewInit() {
    console.log(`"ngAfterViewInit" lifecycle hook: `, this.headerComponent);

    // Comment the following code to implement headers-title using for-loop
    // this.headerComponent.title = "Header Component Title";  // throws error; it's fine when it's in the dev-environment; in case of getting this error in the prod-mode, then that's an issue.
    
    // setTimeout(() => {
    //   console.log(`"ngAfterViewInit" lifecycle hook: `, this.headerComponent);
    // }, 5);

    // console.log(`Header children component:`, this.headerChildrenComponent);
    // this.headerChildrenComponent.get(1).title = "Header Component Title - index1";

    // Dynamically define the "title" of all the instances from the header-component inside template using forEach loop.
    this.headerChildrenComponent.forEach(myFunction);

    function myFunction(item: HeaderComponent, index: number) {
      console.log(`headerChildrenComponent items (${index}):`, item);
      item.title = `Header Component Title - ${index}`;
    }

    // Comment the following code to implement headers-title using for-loop
    // this.headerChildrenComponent.last.title = "Header Component Title - Last";
  }

  // "ngDoCheck" lifecycle hook, expensive method, try to avoid implementing this hook
  ngDoCheck() {
    // console.log(`"ngDoCheck" method is called!`);
  }

  // "ngOnInit" lifecycle hook: It get called before the view is initialized.
  // It should contain all the business logic.
  // e.g. Load data from API & display on your view, then write that code as part of "ngOnInit" lifecycle hook.
  ngOnInit(): void {
    // console.log(`"ngOnInit" lifecycle hook: `, this.headerComponent);   // cannot access, if the static=false or it's ommit inside the @ViewChild decorator
    this.roomList = this.roomsService.getRooms();
  }
}
