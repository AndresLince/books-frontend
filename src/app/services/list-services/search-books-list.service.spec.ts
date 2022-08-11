import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ConfigService } from '../config.service';

import { SearchBooksListService } from './search-books-list.service';

describe('SearchBooksListService', () => {
  let service: SearchBooksListService;
  let httpMock: HttpTestingController
  let configService: ConfigService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchBooksListService,
        { provide: ConfigService}
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(SearchBooksListService);
    httpMock = TestBed.inject(HttpTestingController)
    configService = TestBed.inject(ConfigService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list', () => {
    const query = ''
    const startIndex = 0
    const apiGoogle = configService.getConfig('api_google');
    service.getList(query, startIndex).subscribe((resp: any) => {

    })
    const req = httpMock.expectOne(`${ apiGoogle }volumes?q=${ encodeURIComponent(query) }&startIndex=${ startIndex }`)
    expect(req.request.method).toBe('GET')
  })
});
