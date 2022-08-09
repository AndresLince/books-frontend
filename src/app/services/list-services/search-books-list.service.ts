import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListService } from './list.service';

@Injectable()
export class SearchBooksListService extends ListService {
  public listTitle = 'Interesting articles!';
  public showNbOfArticlesDropdown = false;

  public getList(query: string, startIndex: number): Observable<any> {
    const route = `${ this.configService.getConfig('api_google') }volumes?q=${ encodeURIComponent(query) }&startIndex=${ startIndex }`
    return this.apiService.fetchGet(route, [])
  }
}
