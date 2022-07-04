import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { ApiService } from '../api.service';
import { BookModel } from '../models/book.model';
import { ApiService } from './api.service';

export type ListType = BookModel[];

@Injectable()
export abstract class ListService {
  abstract listTitle: string;
  abstract showNbOfArticlesDropdown: boolean;

  constructor(
    protected apiService: ApiService,
  ) {
  }

  abstract getList(query: string, startIndex: number): Observable<ListType>
}
