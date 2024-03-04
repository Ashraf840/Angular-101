import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  // SimpleChange, // DOn't know this yet?
  // DoCheck  // Very costly, not using it
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,  // This "OnPush" strategy only applies when passing a new instance through the "@Input()" decorato's "rooms" property.
  // Anything happends in the parent component will not take effect of onChange in this component.
  // "OnChanges" lifecycle hook can only be applied if the component contains "@Input()" property & that get new instance of the property. 
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy
// , DoCheck 
{

  // Make this class-property as a valid attribute of the "hinv-rooms-list" HTML tag
  @Input()
  rooms: RoomList[] | null = [];

  @Input()
  title: string = '';

  @Output()
  roomSelected = new EventEmitter<RoomList>();

  constructor() { }

  // NB: Very expensive lifecycle hook, listens to any kind of changes throughout the entire application.
  // Thus it's recommended to avoid using this hook
  // ngDoCheck(): void {
  //   console.log("'ngDoCheck' lifecycle method is called!");
  //   // throw new Error('Method not implemented.');
  // }

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

  ngOnDestroy(): void {
    console.log("Ondestroy lifecycle hook is called!");
  }

}
