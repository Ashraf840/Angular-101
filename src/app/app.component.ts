import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  // The "app" keyword in selector should be custom defined following the application-name; change the "prefix" in "angular.json" file.
  // "app-root" -> "hinv-root"
  selector: 'hinv-root',
  templateUrl: './app.component.html',    // External template
  // template: `<h1>Hellow World!</h1>
  // <p>It's a inline HTML template!</p>
  // `,
  styleUrls: ['./app.component.scss']   // External style
  // styles: [`h1 { color: red }`]
})
export class AppComponent {
  title = 'hotelinventoryapp';
  // mock-data: To demonstrate *ngSwitch
  role = "Admin";
  // role = "User";
  // role = "Unknown";


  // Grab an "ng-template" to load the "room" component dynamically
  // ViewContainerRef ??     It'll help to dynamically load the component inside "ngAfterViewInit" hook
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ElementRef ?? because it's an HTML elem
  @ViewChild('sampleDiv', { static: true }) sampleDiv!: ElementRef; // since this doesn't contain any such code which will cause delay, thus static=true.

  ngOnInit() {
    // since static=true
    // console.log(`App-component templateRef modification:`, this.sampleDiv);
    this.sampleDiv.nativeElement.innerHTML = `<h5>
      App-component templateRef modification
    </h5>`;
  }

  // ngAfterViewInit() {
  //   // Access the user-tag of this component's HTML template inside the "ngAfterViewInit" hook
  //   // console.log(`app-component's "ngAfterViewInit" hook: `, this.vcr);

  //   // // Learn More about "CreateComponent()": https://angular.io/api/core/createComponent
  //   // const componentRef = this.vcr.createComponent(RoomsComponent);  // pass the component-class directly.
  //   // // console.log(`componentRef in app-component:`, componentRef);
  //   // // access & modify any property of the dynamically-loaded component
  //   // componentRef.instance.numOfRooms = 50;

  //   // access & modify a div-elem of the dynamically-loaded component

  // }

  // Demonstration of "ngOnDestroy" lifecycle hook, since the "eomplyee" component will be destroyed; the "ngOnDestroy" will be invoked in the "employee" component.
  showEmployeeComponent = true;

  toggleEmployee() {
    this.showEmployeeComponent = !this.showEmployeeComponent;
  }
}


// Both external & inline HTML & style are available for "templateUrl" & "sytleUrl". 
// For inline the "templateUrl" & "styleUrl" will be changed to "template" & "styles"
