import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterContentInit, OnInit {

  constructor() { }

  ngOnInit(): void { }

  // Originally loaded in the app component, after loading the content, thay can be accessed in this content projection. Thus can be accessed within the "ngAfterContentInit" lifecycle. And by default the "static=false" for @ContentChild & cannot be changed.
  // The contents are always routed from the parent component where they are actually loaded, thus it make sense to not having "static=true" in "@ContentChild" decorator.
  @ContentChild(EmployeeComponent)
  empc!: EmployeeComponent;

  // Content which are loaded using "ng-content" should be access within this lifecycle hook
  ngAfterContentInit(): void {
    console.log("Employee component (ngAfterContentInit of Container Component):", this.empc);
    // Modify a prop value of Employee Component after loading the content in parent component.
    this.empc.empName += " (Extra comment: changed in ngAfterContentInit)"
  }

}
