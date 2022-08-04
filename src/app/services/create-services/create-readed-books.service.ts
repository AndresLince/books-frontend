import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateService } from './create.service';

@Injectable({
  providedIn: 'root'
})
export class CreateReadedBooksService  extends CreateService {

  create(data: any): Observable<any> {
    const route = this.configService.getConfig('base_url') + '/readed-book'
    return this.apiService.Post(route, data, this.utilsService.headers)
  }
}
