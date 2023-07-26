import { Injectable } from '@angular/core';
import { Book } from '../types/Book';


// Globally accessible throughout the project
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  cart: Book[] = [];

  // add a func to push each book-obj into the cart-array (cart-list)
  addToCartList(book: Book) : void {
    // console.log(book);
    this.cart.push(book);
  }

  // remove any elem from the book-list
  removeFromCartList(book: Book) : void {
    // console.log(`Remove the book-elem: ${book.name}`);
    // Create & assign new cart-array after filtering down the book-elem passed through this func's param
    this.cart = this.cart.filter(b => b !== book); 
  }

  // Getter func to get the "cart" property & return where this func is invoked (called in the cart-component)
  getCart() : Book[] {
    return this.cart;
  }
}
