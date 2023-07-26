import { Injectable } from '@angular/core';


// Instead of making this service accessible throughtout the entire project, makes this component only accessible to this component, by creating a 'custom module' of this component inside it's component's dir.
// Then register this service in the "providers" of it's module, thus commented the "@Injectable" decorator.
// @Injectable({
//   providedIn: 'root'
// })
export class BooksService {

  constructor() { }

  getBooks() {
    return [
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
  }
}
