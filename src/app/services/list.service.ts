import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../models/book.model';
import { ApiService } from './api.service';

export type ListType = BookModel[];

@Injectable()
export abstract class ListService {
  abstract listTitle: string;

  constructor(
    protected apiService: ApiService,
  ) {
  }

  abstract getList(query: string, startIndex: number): Observable<ListType>
}
