import { TestBed } from '@angular/core/testing';

import { SearchBooksListService } from './search-books-list.service';

describe('SearchBooksListService', () => {
  let service: SearchBooksListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchBooksListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
