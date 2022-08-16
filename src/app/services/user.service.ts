import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginResponseInterface } from '../interfaces/login-response.interface';
import { Observable, tap, map, catchError, of } from 'rxjs';
import { ConfigService } from './config.service';
import { UtilsService } from './utils.service';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private utilsService: UtilsService
  ) { }

  loginGoogle( token: string ): Observable<LoginResponseInterface> {
    return this.http.post<LoginResponseInterface>(`${ base_url }/auth/google`, { token } )
      .pipe(
        tap((resp:any)=>{
          localStorage.setItem(this.configService.getConfig('token_key'), resp.token)
        })
      )
  }

  validateToken(): Observable<boolean> {
    return this.http.get(`${base_url}/auth/renew`, this.utilsService.headers).pipe(
      map((resp:any) => {
        localStorage.setItem(this.configService.getConfig('token_key'), resp.token)
        return true;
      }),
      catchError(error =>
        of(false)
      )
    )
  }
}
