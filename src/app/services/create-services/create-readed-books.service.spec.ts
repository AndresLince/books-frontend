import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CreateReadedBooksService } from './create-readed-books.service';

describe('CreateReadedBooksService', () => {
  let service: CreateReadedBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CreateReadedBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
