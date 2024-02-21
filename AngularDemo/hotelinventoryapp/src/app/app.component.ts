import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',  // Changed inside the angular.json file's prefix property
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role = 'Admin'; // Used in toggling the view-component in "app.component.html" file
}
