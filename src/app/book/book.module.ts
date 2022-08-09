import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookRoutingModule } from './book.routing';
import { BookComponent } from './book/book.component';
import { ReadedBooksComponent } from './readed-books/readed-books.component';



@NgModule({
  declarations: [
    BookSearchComponent,
    BookComponent,
    ReadedBooksComponent
  ],
  imports: [
    BookRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class BookModule { }
