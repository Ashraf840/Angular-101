import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookName: string = 'Clean Code';
  bookAuthor: string = 'Robert C Martin';
  src: string = 'https://m.media-amazon.com/images/I/41-sN-mzwKL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg';

  bookName2: string = 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition) 2nd Edition';
  bookAuthor2: string = 'David Thomas';
  src2: string = 'https://m.media-amazon.com/images/I/51IA4hT6jrL._SX380_BO1,204,203,200_.jpg';

  
  constructor() {};
  
  ngOnInit(): void {}
  
  // isDisabled: boolean = false;   // [Used in 'Property Binding'. Learnt more about "Property Binding": https://www.youtube.com/watch?v=N8FBmB2jme8]
  // handlieClick() {
  //   this.isDisabled = true;
  // }
  // inputVal: string = '';

  isShow: boolean = true;

  // NB: This changing boolean-value of a variable can be done inside the template replacing this function's invoke for the "(click)" event
  // toggleBooks() {
  //   this.isShow = !this.isShow;  // if the "isShow" is true, then it'll make it false. [Vice-versa]
  // }
}
