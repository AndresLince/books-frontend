import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, map } from 'rxjs';
import { listServiceFactory } from 'src/app/factories/list.service.factory';
import { ListType } from 'src/app/models/app-enums.model';
import { BookModel } from 'src/app/models/book.model';
import { ListService } from 'src/app/services/list-services/list.service';

@Component({
  selector: 'app-readed-books',
  templateUrl: './readed-books.component.html',
  styleUrls: ['./readed-books.component.css'],
  providers: [
    { provide: ListService, useClass: listServiceFactory(ListType.ReadedBooks)}
  ]
})
export class ReadedBooksComponent implements OnInit {
  searchFormControl = new FormControl('')
  books: BookModel[] = []
  totalItems: number = 0
  startIndex: number = 0

  constructor(
    private listService: ListService,
  ) { }

  ngOnInit(): void {
    this.getBooksData('')
    this.searchFormControl.valueChanges.pipe(
      map(search => search?.toLowerCase().trim()),
      debounceTime(900)
    ).subscribe(query => {
      this.getBooksData(query)

    })
  }

  getBooksData(query: string) {
    this.listService.getList(query, this.startIndex)
      .subscribe({
        next: this.handleResponse.bind(this),
        error: this.handleError.bind(this)
    })
  }

  handleResponse(resp: any) {
    this.totalItems = resp.totalItems
    console.log(resp)
    this.books = resp.books.map(
      (book: any) => new BookModel(
        book.id,
        book.title,
        book.author? book.author: '',
        book.image? book.image: '/assets/img/imagen-not-found.png',
        book.pageCount
      )
    )
  }

  handleError(error: any) {

  }

  removeFromReaded(event: Event,book: BookModel) {

  }

}
