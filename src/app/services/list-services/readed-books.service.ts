import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root'
})
export class ReadedBooksService extends ListService{

  public listTitle = 'Libros leidos';

  public getList(query: string, startIndex: number): Observable<any> {
    const route = `${ this.configService.getConfig('base_url') }/readed-books?q=${ encodeURIComponent(query) }&startIndex=${ startIndex }`
    return this.apiService.fetchGet(route, this.utilsService.headers)
  }
}
