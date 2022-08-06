import { TestBed } from '@angular/core/testing';

import { ReadedBooksService } from './readed-books.service';

describe('ReadedBooksService', () => {
  let service: ReadedBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadedBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
