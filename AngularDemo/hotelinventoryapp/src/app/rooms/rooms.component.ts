import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomService } from './services/room.service';
import { Observable, Subject, Subscription, catchError, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {

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

  // Stream of data using 'observable' from RxJS
  stream = new Observable<string>(observer => {
    observer.next('user 1');
    observer.next('user 2');
    observer.next('user 3');
    observer.complete();
  });

  totalBytes = 0;

  // @ViewChild(HeaderComponent, {'static': true})  // Only use static=true if we're sure no asynchronous code is written inside that component. That time we can event access this component inside the "ngOnInit()" lifecycle hook.
  @ViewChild(HeaderComponent)
  header!: HeaderComponent; // Instantiate component of the same hierarchy

  // Access all the instances of "HeaderComponent" using @ViewChildren() decorator
  // "static" property is by default false & cannot be altered. Thus the array of component-instances can be accessed only from "ngAfterViewInit()" lifecycle hook.
  @ViewChildren(HeaderComponent)
  headerChildren!: QueryList<HeaderComponent>;

  // Assign a subscription object to a subscriber, which later will be unsubscribed in this component's ngOnDestroy lifecycle hook.
  subscription !: Subscription;

  // Create an error stream to show the error message directly to the stream, so that it can be shown in the template.
  // Instantiate a new Subject instance.
  error$ = new Subject<string>(); // HAVING ISSUE

  getError$ = this.error$.asObservable(); // HAVING ISSUE

  // Directly calling the roomService property to which fetches the data from the backend
  // Handle error if the service faces an error.
  rooms$ = this.roomService.getRooms$.pipe(
    catchError((err) => {
      console.log(err);
      this.error$.next(err.message);  // Whenever we receives an error, we'll subscribe to that.
      return of([]);
    })
  );

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    // Demonstration of loading bulk amount of data from the API;
    // Show a loader on while fetching such bulk data
    this.roomService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log("Request has been sent");
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log("Request success");
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });

    // (Approach-2)Subscribing to the observable
    this.stream.subscribe({
      next: (data) => console.log(data),
      complete: () => console.log("complete"),
      error: (err) => console.log("errro"),
    });

    // (Approach-1) Subscribing to the stream of data observable
    // this.stream.subscribe(data => console.log(data));

    console.log("HeaderComponent (ngOnInit):", this.header); // Output: undefined; since explicitly not defining "static=true", which indicates, that the dev of the component is unsure whether there is any asynchronous codes on that component
    // NB: This is safe to access the "header" component-variable in the "AfterViewInit" lifecycle hook of this component.

    // Assign the room-service function to get all data into a variable here. Making of http request to fetch the data from django backend, since it's an asynchronous call-tp-api, we need to "subscribe" to that service-method rather than directlyt assing the m
    // this.roomList = this.roomService.getRooms();

    // console.log(this.roomService.getRooms());

    // // Subscribing to the "getRooms()" method of the "roomsService".
    // // Rather than using the plain method w/o any ShareReplay() operator, I've used the customized "getRooms$" variable which contains the fetching of rooms-list w/ pipe method to where the ShareReplaye operator is used.
    // // Thus it'll make only one call in the get-rooms API, can inspect that in the network of the browser debug.
    // // this.roomService.getRooms().subscribe(rooms => {
    // this.subscription = this.roomService.getRooms$.subscribe(rooms => {
    //   this.roomList = rooms;  // if we don't define the datatype (in generic) while using the http.get() method, the assignment here will throw an error mentioning the roomList is of type list() & cannot assign to data of type object
    //   console.log("RoomList:", rooms);
    // }); // Instead of manually subscribing, just call the getRooms$ of roomService as the prop of this class.

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
    // this.roomList = [...this.roomList, room]; // Since, it's now required to pass a new instance of the property (roomList), a new instance is created this way

    // Make a post request to craete room in the backend & show the response
    this.roomService.addRoom(room).subscribe(data => {
      console.log("Room list:", data);

      this.roomList = data;
    });
  }

  hideRoomList_handler() {
    this.hideRoomList = !this.hideRoomList;
  }

  ngOnDestroy(): void {
    // Unsubscribe if there is any available subscription exist in this component while destroying this component.
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
