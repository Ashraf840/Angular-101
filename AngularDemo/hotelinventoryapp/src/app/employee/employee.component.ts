import { Component, OnInit } from '@angular/core';
import { RoomService } from '../rooms/services/room.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomService]
})
export class EmployeeComponent implements OnInit {
  empName: string = "John";

  // NB: Even if we inject roomService here, the service class will only be initialized once inside the 'room.service' file as the global instance by registering the service globally inside the "providers" section of the "app.nodule" file.
  // If we want to separately initialize the roomService here, then we need to register the service into the "providers" section separately into this component as well.
  constructor(private roomservice: RoomService) { }

  ngOnInit(): void { }
}
