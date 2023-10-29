import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Observables are unicast
    const observable = new Observable(obj => obj.next(Math.random()));  // Expects a callback func; later returns a next() method

    // Subscriber-1
    observable.subscribe(d => console.log(d));
    // Subscriber-2
    observable.subscribe(d => console.log(d));
    // NB: Each subcribed observer owns a independent execution of the observable; thus the following subcribed observers invokes the same observable twice separatly


    // Subjects are multicast
    
  }
}
