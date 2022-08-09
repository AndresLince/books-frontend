import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, debounceTime } from 'rxjs';
import { BookModel } from 'src/app/models/book.model';
import { listServiceFactory } from 'src/app/factories/list.service.factory';
import { ListService } from 'src/app/services/list-services/list.service';
import { ListType, CreateServiceType } from "../../models/app-enums.model";
import { CreateService } from 'src/app/services/create-services/create.service';
import { createServiceFactory } from 'src/app/factories/create.service.factory';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
  providers: [
    { provide: ListService, useClass: listServiceFactory(ListType.SearchBooks) },
    { provide: CreateService, useClass: createServiceFactory(CreateServiceType.ReadedBooks) }
  ],
})
export class BookSearchComponent implements OnInit {
  searchFormControl = new FormControl('')
  books: BookModel[] = []
  totalItems: number = 0
  startIndex: number = 0

  constructor(
    private listService: ListService,
    private createService: CreateService
  ) { }

  ngOnInit(): void {
    this.searchFormControl.valueChanges.pipe(
      map(search => search?.toLowerCase().trim()),
      debounceTime(900)
    ).subscribe(query => {
      if (query !== '') {
        this.getBooksData(query)
      } else {
        this.books = []
        this.totalItems = 0
      }
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

    this.books = resp.items.map(
      (book: any) => new BookModel(
        book.id,
        book.volumeInfo.title,
        book.volumeInfo.authors? book.volumeInfo.authors[0]: '',
        book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail: '/assets/img/imagen-not-found.png',
        book.volumeInfo.pageCount
      )
    )
  }

  handleError(error: any) {
    console.log(error)
  }

  addToReaded(event: Event,book: BookModel) {
    event.preventDefault()
    this.createService.create(book).subscribe({
      next: this.handleResponseCreation.bind(this),
      error: this.handleError.bind(this)
    })
  }

  handleResponseCreation(resp: any) {

  }
}
