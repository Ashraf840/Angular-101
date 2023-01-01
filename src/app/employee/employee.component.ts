import { Component } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService]   // It'll initialize the service instance separately.
})
export class EmployeeComponent {
  empName: string = "John";

  // Demonstrate "Singleton" pattern; Unless passing the service through "providers" property, this component was using the global instance of this service. Currently, it's using the local instance of the service ("RoomsService").
  constructor(private roomsService: RoomsService) {}

  // "ngOnDestroy" is invoked here, because it's destroyed in the "app" component regardless of  being passed as content in the "container" component
  ngOnDestroy() {
    console.log(`ngOnDestroy lifecycle hook is called!`);
  }
}
