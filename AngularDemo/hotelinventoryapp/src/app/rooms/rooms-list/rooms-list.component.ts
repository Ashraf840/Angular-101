import { Component, EventEmitter, Input, Output, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,  // This "OnPush" strategy only applies when passing a new instance through the "@Input()" decorato's "rooms" property.
  // Anything happends in the parent component will not take effect of onChange in this component.
  // "OnChanges" lifecycle hook can only be applied if the component contains "@Input()" property & that get new instance of the property. 
})
export class RoomsListComponent implements OnInit, OnChanges {

  // Make this class-property as a valid attribute of the "hinv-rooms-list" HTML tag
  @Input()
  rooms: RoomList[] = [];

  @Input()
  title: string = '';

  @Output()
  roomSelected = new EventEmitter<RoomList>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log(changes);
    console.log("firstChange (OnChanges)", changes?.['rooms']?.firstChange);
    console.log("currentValue (OnChanges)", changes?.['rooms']?.currentValue);
    console.log("previousValue (OnChanges)", changes?.['rooms']?.previousValue);
  }

  ngOnInit(): void { }

  selectRoom(room: RoomList) {
    // console.log("Clicked!");
    this.roomSelected.emit(room);
  }

}
