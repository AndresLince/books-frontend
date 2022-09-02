import { TestBed } from '@angular/core/testing';
import { TypeIndexPaginator } from 'src/app/models/app-enums.model';

import { IndexPaginatorService } from './index-paginator.service';

describe('IndexPaginatorService', () => {
  let service: IndexPaginatorService;
  let firstIndex: string = '0'

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexPaginatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add new Index', () => {
    service.addIndex(firstIndex)
    expect(service.pagesIndexes).toEqual([firstIndex])
  });

  it('should get Index', () => {
    service.addIndex(firstIndex)
    service.addIndex('20')
    service.addIndex('30')
    const index = service.getIndex(TypeIndexPaginator.Next)
    expect(index).toEqual('30')
    const previous = service.getIndex(TypeIndexPaginator. Previous)
    expect(previous).toEqual(firstIndex)
    const initial = service.getIndex(TypeIndexPaginator. Previous)
    expect(initial).toEqual('0')
    const notDefinedIndex = service.getIndex('')
    expect(notDefinedIndex).toEqual('0')
  });
});
