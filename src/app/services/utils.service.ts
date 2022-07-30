import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

const token_key = 'token_books'

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private configService: ConfigService
  ) { }

  get token(): string {
    return localStorage.getItem(this.configService.getConfig('token_key')) || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }
}
