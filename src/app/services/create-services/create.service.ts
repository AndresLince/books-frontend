import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { ConfigService } from '../config.service';
import { UtilsService } from '../utils.service';

@Injectable({
  providedIn: 'root'
})
export abstract class CreateService {

  constructor(
    protected apiService: ApiService,
    protected utilsService: UtilsService,
    protected configService: ConfigService
  ) {
  }

  abstract create(data: any): Observable<any>
}


