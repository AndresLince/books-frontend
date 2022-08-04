import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { ConfigService } from '../config.service';

@Injectable()
export abstract class ListService {
  abstract listTitle: string;

  constructor(
    protected apiService: ApiService,
    protected configService: ConfigService
  ) {
  }

  abstract getList(query: string, startIndex: number): Observable<any>
}
