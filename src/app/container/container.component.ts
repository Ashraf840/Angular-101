import { Component, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  // Access the "employee" component as content, since the component is passed from the "app" component (parent)
  @ContentChild(EmployeeComponent) empCmpContent!: EmployeeComponent;   // static=true/false is not available; only access those content after they get fully initialized. Thus the contents can on;y be accessed inside the "ngAfterContentInit" hook.

  // Modify the property of "employee" component
  ngAfterContentInit(): void {
    console.log(`"ngAfterContentInit" hook; Employee component as content: `, this.empCmpContent);
    this.empCmpContent.empName = "Rick";
  }
}
