import { Component } from '@angular/core';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  empName: string = "John";

  // "ngOnDestroy" is invoked here, because it's destroyed in the "app" component regardless of  being passed as content in the "container" component
  ngOnDestroy() {
    console.log(`ngOnDestroy lifecycle hook is called!`);
  }
}
