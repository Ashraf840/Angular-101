import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  // Only called once; Inject the BooksService (Dependancy Injection)
  constructor(private BooksService: BooksService) {
    // console.log(`constructor() called inside the parent-component: "Books"!`);
  };
  
  // array of type "Book"; The values of this array will be stored inside a method "getBooks()" which is inside a service.
  books: Book[] = [];
  
  // Called "n" number of times
  ngOnInit(): void {
    // console.log(`ngOnInit() called inside the parent-component: "Books"!`);

    // Invoke the service here to store into one of this component's properties
    this.books = this.BooksService.getBooks();
  }
  
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

  // Recives the book-obj emmited from its child class & then passed through the func "addToCart()" in the template's child-component-tag.
  // [NB: NOT USING SINCE, IT'S BYPASSED TO THE GLOBAL SERVICE "Cart"]
  // addToCart(book: Book) {
  //   console.log(book);
  // }
}
