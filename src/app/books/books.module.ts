import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BooksComponent } from '../books/books.component';
import { BooksService } from './books.service';


@NgModule({
  declarations: [BooksComponent, BookComponent],
  imports: [
    CommonModule
  ],
  providers: [BooksService],  // Makes the service(s) module-specific
  exports: [BooksComponent]   // Make this module's component(s) avaiable to use by other modules.
})
export class BooksModule { }
