import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  fetchGet(route: string, headers: any): Observable<any> {
    return this.http.get<any>(route, headers)
  }

  Post(route: string, data: any, headers: any) {
    return this.http.post(route ,data, headers)
  }
}
