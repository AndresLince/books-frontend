import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  }

  getBooksData(query: string) {
    this.listService.getList(query, this.startIndex)
      .subscribe({
        next: this.handleResponse.bind(this),
        error: this.handleError.bind(this)
    })
  }

  handleResponse(resp: any) {
    console.log(resp)
  }

  handleError(error: any) {

  }

  removeFromReaded(event: Event,book: BookModel) {

  }

}
