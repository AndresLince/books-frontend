import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BookModel } from '../models/book.model';
import { ListService } from './list.service';

@Injectable()
export class SearchBooksListService extends ListService {
  public listTitle = 'Interesting articles!';
  public showNbOfArticlesDropdown = false;

  public getList(query: string, startIndex: number): Observable<any> {
    return this.apiService.fetchSearchBooks(query, startIndex)
  }
}
