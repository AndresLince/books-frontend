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
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(this.configService.getConfig('token_key')) || ''
    }
    return '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }
}
