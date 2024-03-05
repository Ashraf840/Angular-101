import { Inject, Injectable } from '@angular/core';
import { Room, RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'  //It helps to initialize a single instance of the class throughout the application
})
export class RoomService {

  // Getting the roomList from mock-backend-server [COMMENTED OUTSIDE THE CLASS]

  // Add headers to HTTP requests
  // headers = new HttpHeaders({ 'authorization': 'Bearer 12398ydsflk328' });  // "token" as a key is not allowed in the "CORS_ALLOW_HEADERS" defined in the settings.py file of the django backend, thus changed it to "authorization"
  // NB: Added the headers of each request in the HttpIntercaptor.

  // ShareReplay Operator in RxJS: Converting multicasted Observable into a unicast Observable by caching it's emitted values
  // Note: When there are multiple subscribers to an Observable.
  // "nth" instance of that Observable by defining integer index as arg in "ShareReplay()"
  // For demonstrating the caching of emitted values, I've duplicated the rooms.component so that the fetching of room-list-data gets called twice & then use ShareReplay to mitigate the number of callings (by caching).
  // Note: We cannot modify a stream of data after it's received, it can only be nodified only within a stream or before it is subscribed.  
  // Directly calling the get-room-list-api while using the pipe method to integrate ShareReplay() operator.
  // The trailing dollar denotes that the variable is a stream.
  getRooms$ = this.http.get<RoomList[]>('http://127.0.0.1:8080/hotel/room-list/', {
    // headers: this.headers  // NB: Added the headers of each request in the HttpIntercaptor.
  }).pipe(
    shareReplay(1) // Replay the last one record that we've received
  );

  // Caching the getPhotos-api to infuse ShareReplay (RxJS operator) using pipe() method to stop hitting the backend server regardless of how many time this api-observable gets subscribed in components.
  request = new HttpRequest(
    'GET',
    'https://jsonplaceholder.typicode.com/photos',
    { reportProgress: true }
  );
  getPhotos$ = this.http.request(this.request).pipe(
    shareReplay(1)
  );

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient) {
    console.log(config.apiEndpoint);

    console.log("Room service is initialized");
  }

  // DEPRECATED; USING SHAREREPLAY FOR CACHING
  getRooms() {
    console.log("Calling the getRooms() method to fetch all the rooms from the 'room.service' file");

    // return this.roomList;

    // Instead of return roomList as static object, it'll be fetched from the backend-server.
    let roomListURL = "http://127.0.0.1:8080/hotel/room-list/";
    return this.http.get<RoomList[]>(roomListURL);   // define the datatype of Roomlist[] as in generic manner, otherwise it'll throw an error while using this service to another component & want to assign it's fetched value to a variable there.
  }

  addRoom(room: RoomList) {
    let roomCreateURL = "http://127.0.0.1:8080/hotel/room-create/";
    // Show all the rooms list, after adding the record to backend.
    return this.http.post<RoomList[]>(roomCreateURL, room);
  }

  // Demonstration of loading bulk amount of data from the API.
  // DEPRECATED; USING SHAREREPLAY FOR CACHING
  // Caching this observable event using ShareReplay (RxJS operator), so that it doesn't make multiple calls to the server.
  getPhotos() {
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      { reportProgress: true }
    );
    return this.http.request(request);
  }
}


/** 
  // roomList: RoomList[] = [
  //   {
  //     "id": "65d58f008a4ac953b95825a7",
  //     "roomType": "Single",
  //     "amenities": [
  //       "Charging Station",
  //       "Beer",
  //       "Snacks Basket"
  //     ],
  //     "price": 600,
  //     "picture": "https://www.istockphoto.com/photo/luxurious-modern-bedroom-with-blank-boxes-for-your-design-gm97084449-12119394",
  //     "checkinTime": "2011-09-30T12:47:48.797Z",
  //     "checkoutTime": "2010-07-25T18:43:16.676Z"
  //   },
  //   {
  //     "id": "65d58f00c3ceb1c23ea5d1cb",
  //     "roomType": "Suite",
  //     "amenities": [
  //       "Slippers",
  //       "Beer"
  //     ],
  //     "price": 800,
  //     "picture": "https://www.istockphoto.com/photo/hotel-room-gm183360854-15135140",
  //     "checkinTime": "2015-12-04T23:58:19.729Z",
  //     "checkoutTime": "2012-11-24T02:00:41.833Z"
  //   },
  //   {
  //     "id": "65d58f00e868d4b0c2b455c2",
  //     "roomType": "Suite",
  //     "amenities": [
  //       "Slippers",
  //       "Beer",
  //       "Live Kitchen"
  //     ],
  //     "price": 1500,
  //     "picture": "https://www.istockphoto.com/photo/comfortable-room-gm133983218-18290760",
  //     "checkinTime": "2011-07-08T11:23:57.301Z",
  //     "checkoutTime": "2011-03-29T23:20:38.194Z"
  //   },
  //   {
  //     "id": "65d58f00a3e3bdb69781f489",
  //     "roomType": "Double",
  //     "amenities": [
  //       "Toiletries",
  //       "Complementary Breakfast"
  //     ],
  //     "price": 1200,
  //     "picture": "https://www.istockphoto.com/photo/comfortable-room-gm133983218-18290760",
  //     "checkinTime": "2014-12-26T13:07:47.194Z",
  //     "checkoutTime": "2013-12-27T04:42:09.715Z"
  //   },
  // ];
*/