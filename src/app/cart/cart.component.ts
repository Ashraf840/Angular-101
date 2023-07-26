import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Book } from '../types/Book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  getCart() : Book[] {
    return this.cartService.getCart();
  }
}
