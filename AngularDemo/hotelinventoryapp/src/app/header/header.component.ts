import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = "Angular-101";

  constructor() { }

  ngOnInit(): void { }

}
