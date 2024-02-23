import { Component, Input, OnInit } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  // Make this class-property as a valid attribute of the "hinv-rooms-list" HTML tag
  @Input() rooms: RoomList[] = [];

  constructor() { }

  ngOnInit(): void { }

}
