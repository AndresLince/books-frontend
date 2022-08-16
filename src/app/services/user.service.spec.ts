import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { environment } from "src/environments/environment"
import { UserService } from './user.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginResponseInterface } from '../interfaces/login-response.interface';
import { HttpErrorResponse } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController
  let storage: any

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents()
    httpMock = TestBed.inject(HttpTestingController)
    service = TestBed.inject(UserService);
    storage = {}
    spyOn(localStorage, 'getItem').and.callFake((key: string) => {
      return storage[key] ? storage[key] : null
    })
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

  it('validate token should be get', () => {
    service.validateToken().subscribe(resp => {
      expect(resp).toBeTruthy()
    })
    const req = httpMock.expectOne(environment.base_url + `/auth/renew`)
    expect(req.request.method).toBe('GET')
    req.flush(true)
  })

  it('validate token should return an error', () => {
    service.validateToken().subscribe(resp => {
      error: (error:HttpErrorResponse) => {
        expect(error.status).toBe(500)
      }
    })
    const req = httpMock.expectOne(environment.base_url + `/auth/renew`)
    expect(req.request.method).toBe('GET')
    req.flush(
      'Save course failed',
      {status: 500, statusText: 'Internal server error'}
    )
  })
});
