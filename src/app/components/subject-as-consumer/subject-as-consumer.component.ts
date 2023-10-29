import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-as-consumer',
  templateUrl: './subject-as-consumer.component.html',
  styleUrls: ['./subject-as-consumer.component.css']
})
export class SubjectAsConsumerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Consume the api data in different places of my application; might have mutliple subscriber of the observable
    const data = ajax(`https://jsonplaceholder.typicode.com/users`);  // ajax's default return type is Observable; hence we can attach subscribers to the "data" object
  
    // data.subscribe(d => console.log(d));  // view the Network tab in the browser, you'll see there are 2 ajax response
    // data.subscribe(d => console.log(d));  // In order to consume the data in different places of the application, we subscribe to the data multiple times, the api is invoked multiple times accordingly

    // Avoid calling multiple times to fetch the same data. 
    // Subscribe to a subject type object, then pass that subject object to the subscribe method of the observable (data)
    const subject = new Subject();
    subject.subscribe(d => console.log(d));
    subject.subscribe(d => console.log(d));

    const result = data.subscribe(subject);
  }
}
