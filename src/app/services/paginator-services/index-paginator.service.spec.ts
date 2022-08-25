import { TestBed } from '@angular/core/testing';

import { IndexPaginatorService } from './index-paginator.service';

describe('IndexPaginatorService', () => {
  let service: IndexPaginatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexPaginatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
