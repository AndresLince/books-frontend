import { NgModule } from '@angular/core';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookRoutingModule } from './book.routing';



@NgModule({
  declarations: [
    BookSearchComponent
  ],
  imports: [
    BookRoutingModule
  ]
})
export class BookModule { }
