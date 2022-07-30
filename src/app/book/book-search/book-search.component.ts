import { Component, Injector, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, debounceTime } from 'rxjs';
import { BookModel } from 'src/app/models/book.model';
import { listServiceProvider } from 'src/app/providers/list.service.provider';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
  providers: [ listServiceProvider ],
})
export class BookSearchComponent implements OnInit {
  searchFormControl = new FormControl('')
  books: BookModel[] = []
  totalItems: number = 0
  startIndex: number = 0

  constructor(
    private listService: ListService,
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
        1,
        book.volumeInfo.title,
        book.volumeInfo.authors? book.volumeInfo.authors[0]: '',
        book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail: '/assets/img/imagen-not-found.png'
      )
    )
  }

  handleError(error: any) {
    console.log(error)
  }

}
