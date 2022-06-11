import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { environment } from "src/environments/environment"
import { UserService } from './user.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginResponseInterface } from '../interfaces/login-response.interface';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents()
    httpMock = TestBed.inject(HttpTestingController)
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loginGoogle should be post', () => {
    service.loginGoogle('').subscribe((resp: LoginResponseInterface) => {
      expect(resp).toEqual({token: ''})
    })
    const req = httpMock.expectOne(environment.base_url + `/auth/google`)
    expect(req.request.method).toBe('POST')
    req.flush({token: ''})
  })
});
