import { Component, OnInit } from '@angular/core';

// Create an interface of type "Book"
interface Book {
  name: string;
  author: string | string[];
  image: string;
  amount: number;
}


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  // array of type "Book"
  books: Book[] = [
    {
      name: 'clean code',   // Use pipes for title-casing the book nmaes
      author: 'Robert C Martin',
      image: 'https://m.media-amazon.com/images/I/41-sN-mzwKL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      amount: 700,
    },
    {
      name: 'the pragmatic programmer',
      author: 'David Thomas',
      image: 'https://m.media-amazon.com/images/I/51IA4hT6jrL._SX380_BO1,204,203,200_.jpg',
      amount: 850,
    },

    {
      name: 'Designing Data-Intensive Applications',
      author: 'Martin Kleppmann',
      image: 'https://m.media-amazon.com/images/I/514xvNk9rTL._SX379_BO1,204,203,200_.jpg',
      amount: 600,
    },
    {
      name: 'Design Patterns',
      author: ['Erich Gamma', 'Richard Helm', 'Ralph Johnson', 'John Vlissides', 'Grady Booch'],
      image: 'https://m.media-amazon.com/images/I/51XySwBKGuL._SX395_BO1,204,203,200_.jpg',
      amount: 680,
    },
    {
      name: 'Introduction to Algorithms',
      author: ['Thomas H. Cormen', 'Charles E. Leiserson', 'Ronald L. Rivest', 'Clifford Stein'],
      image: 'https://m.media-amazon.com/images/I/41SNoh5ZhOL._SX440_BO1,204,203,200_.jpg',
      amount: 760,
    },
  ]
  
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
