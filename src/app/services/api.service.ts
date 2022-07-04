import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../models/book.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) { }

  fetchSearchBooks(query: string, startIndex: number ): Observable<any> {
    console.log(`${ this.configService.getConfig('api_google') }volumes?q=${ encodeURIComponent(query) }`)
    return this.http.get<any>(`${ this.configService.getConfig('api_google') }volumes?q=${ encodeURIComponent(query) }&startIndex=${ startIndex }` )
  }
}
