import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public environmentVariables: any = {};
  constructor() {
    const environmentVariables = Object.entries(environment)

    environmentVariables.forEach((element) => {
      var key = element[0]
      var value = element[1]
      this.environmentVariables[key] = value
    })
    this.environmentVariables.api_google = 'https://www.googleapis.com/books/v1/'
    this.environmentVariables.token_key = 'token_books'
    this.environmentVariables.base_url = environment.base_url
  }

  getConfig(key: any): any {
    return this.environmentVariables[key]
  }
}
