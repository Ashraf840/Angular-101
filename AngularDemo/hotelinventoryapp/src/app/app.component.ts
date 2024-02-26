import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',  // Changed inside the angular.json file's prefix property
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'hotelinventoryapp';

  role = 'Admin'; // Used in toggling the view-component in "app.component.html" file

  @ViewChild('name', { 'static': true })  // "static:true" ensures there this elem (div) won't cause any delay or, cause any issue & thus can be accessed from the "ngOnIt()" lifecycle hook.
  name!: ElementRef;

  // Get the ref of "user" tag from this component's own template. It's called "templateRef"
  @ViewChild('user', { read: ViewContainerRef })
  vcr!: ViewContainerRef; // Using "ViewContainerRef" since it's referencing a reuseable template (ng-template)

  constructor() { }

  ngOnInit(): void {
    console.log("#name div:", this.name);
    this.name.nativeElement.innerText = "Hilton Hotel (Populated using \"ElementRef using @ViewChild()\")";
  }

  // The "vcr" will help to dynamically load a component to this component's ng-template.
  ngAfterViewInit(): void {
    // Loaded a component dynamically
    const componentRef = this.vcr.createComponent(RoomsComponent);
    // Change a property of a component dynamically
    // Modify the "numOfRooms" property from here a demo 
    componentRef.instance.numOfRooms = 50;
  }
}
