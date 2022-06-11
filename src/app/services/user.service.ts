import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginResponseInterface } from '../interfaces/login-response.interface';
import { Observable } from 'rxjs';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  loginGoogle( token: string ): Observable<LoginResponseInterface> {
    return this.http.post<LoginResponseInterface>(`${ base_url }/auth/google`, { token } )
  }
}
