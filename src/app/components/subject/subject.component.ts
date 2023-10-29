import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // RxJs Subject wokring as a data provider to it's subscribers
    const subject = new Subject();

    // Subscriber-1
    subject.subscribe(d => console.log(d));

    // Subscriber-2
    subject.subscribe(d => console.log(d));

    // Pass a data through subject to ti's subscriber
    subject.next(Math.random());
  }
}
