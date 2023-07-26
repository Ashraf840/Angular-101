import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Book } from '../../types/Book';
import { Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

// This component-class is created for each <li> rendered in the frontend. Thus each <li> has a dedicated "BookComponent" class instance attached to it.
export class BookComponent implements OnInit, OnDestroy{
  @Input() book: Book = {} as Book;   // Used to catch the "book" object from the for-loop in the parent component. Which is later passed in this child component's template.

  // @Output() emitBook = new EventEmitter<Book>();  // [NOT USING, INTEAD OF EMITTING INTO PARENT-COMPONENT, PASSING THE BOOK-OBJ INTO A GLOBAL SERVICE "CartService"]

  // Unlike "ngOnInit()", the "constructor()" of the child-component still instantiated -O-N-L-Y- -O-N-C-E- while the class-component is created!
  // DI the "CartService" in the constructor
  constructor(private cartService: CartService) {
      // console.log(`constructor() called inside the child-component: "Book"!`);
  };

  // Called multiple times aligned to the number of times this child-component is called in the parent-component's HTML-template.
  ngOnInit(): void {
    // console.log(`ngOnInit() called inside the child-component: "Book"! Book name: ${this.book.name}`);
    
    // [NOT USING]
    // this.intervalTimer = setInterval(() => {
    //   console.log(`Hellow!`);
    // }, 1000);
  }

  isInCart: boolean = false;

  // This function is created to catch the "addToCart" button in the child component's template. 
  // [NOT USING, SINCE USING THE GLOBAL "Cart" SERVICE] Later the specific "book" object will be emitted to the parent component's template, where this child compoent is added as an html-tag.
  addToCart() : void {
    // console.log(`Calling from the child-component (book)`,this.book);
    // this.emitBook.emit(this.book);   [NOT USING]

    // [Bypass from parent-component to global service "cart"] Using the global service called cart to store each book-obj in that service's array
    this.cartService.addToCartList(this.book);

    // make "isInCart" to true, since this func is adding the specific book-onj to cart, thus the specified child-book-component will contain the "Remove from Cart" functionality.
    this.isInCart = true;
  }

  removeFromCart() : void {
    this.cartService.removeFromCartList(this.book);
    // make the 'isInIt' to false
    this.isInCart = false
  }

  ngOnDestroy(): void {
    // clearInterval(this.intervalTimer);  // [NOT USING]
    // console.log(`"ngOnDestroy()" function is called!`);
  }

  // [Task]: While this component is destroyed by toggling the book-list by the toggle-btn, then the "setInterval()" function's prop "intervalTimer" 
  // will need to be cleared by calling the "clearInterval()" function & pass the var "intervalTimer" as param in it which is inside the "ngDestroy()" function.
  // Create a prop for 'setInterval()' function which will be instantiated in the "ngOnInit()" method.
  // intervalTimer: any = null;  // [NOT USING]
}
