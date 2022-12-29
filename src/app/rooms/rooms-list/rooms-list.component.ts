import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Room, RoomList } from '../rooms';  // RoomList interface

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges {
  
  // @Input decorator makes the "rooms" property as an valid HTML property on the "hinv-rooms-list" HTML elem. Thus we can pass the data through the "hinv-rooms-list" tag. @Input can give the data to this child/dumb component.
  @Input() rooms: RoomList[] = [];  // "rooms" is a valid-property of this component.
  @Input() component_title: string = "";

  // @Output can pass the data/action to the parent-component; define the kind of data to be passed into parent elem
  @Output() selectedRoom = new EventEmitter<RoomList>();

  // Select single room func; later emit that into parent component
  // Local func, only dedicated to this component "room-list".
  selectRoom(room: RoomList) {
    // Once the func is invoked, emit/return the data/func back to parent-component
    this.selectedRoom.emit(room);
  }

  // This lifecycle hook only works if the @Input gets new data
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log(`"ngOnChanges" passed object-as-arg:`, changes);
    // console.log(changes?.['component_title'].currentValue.toUpperCase());
    // console.log(changes?.['component_title']?.['firstChange']);
    // changes?.['component_title']?.['firstChange'] ? this.component_title.toUpperCase() : true;
    !changes?.['component_title']?.['firstChange'] ? this.component_title = this.component_title.toUpperCase() : true;
    // this.component_title = this.component_title.toUpperCase();
  }
}
