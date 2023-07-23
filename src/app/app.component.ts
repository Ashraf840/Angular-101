import { Component } from "@angular/core";

@Component({
    selector: '.app-my-root',
    // template: `<h1>Hellow Template</h1>`,  // for inline-templating
    templateUrl: './app.component.html',    // for declaring external template file
    styleUrls: ['./app.component.css'],
})
export class AppComponent {}