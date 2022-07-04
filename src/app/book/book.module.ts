import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookRoutingModule } from './book.routing';



@NgModule({
  declarations: [
    BookSearchComponent
  ],
  imports: [
    BookRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class BookModule { }
