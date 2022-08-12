import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ConfigService } from '../config.service';

import { CreateReadedBooksService } from './create-readed-books.service';

describe('CreateReadedBooksService', () => {
  let service: CreateReadedBooksService;
  let configService: ConfigService
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CreateReadedBooksService);
    httpMock = TestBed.inject(HttpTestingController)
    configService = TestBed.inject(ConfigService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create readed book', () => {
    const data: any = []
    service.create(data).subscribe((resp: any) => {
      expect(resp).toBeTruthy()
    })
    const req = httpMock.expectOne(`${ configService.getConfig('base_url') }/readed-book`)
    expect(req.request.method).toBe('POST')
    req.flush({})
  })
});
