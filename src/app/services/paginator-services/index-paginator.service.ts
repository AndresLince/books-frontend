import { Injectable } from '@angular/core';
import { TypeIndexPaginator } from 'src/app/models/app-enums.model';

@Injectable({
  providedIn: 'root'
})
export class IndexPaginatorService {

  pagesIndexes: string[] = []

  constructor() { }

  addIndex(index: string): void {
    if (this.pagesIndexes.indexOf(index) < 0) {
      this.pagesIndexes.push(index)
    }
  }

  getNextIndex(): string {
    return this.pagesIndexes[this.pagesIndexes.length - 1] || '0'
  }

  getLastIndex(): string {
    this.pagesIndexes.pop()
    this.pagesIndexes.pop()
    return this.pagesIndexes[this.pagesIndexes.length - 1] || '0'
  }

  getIndex(type: string) : string {
    let index = '0'
    switch (type) {
      case TypeIndexPaginator.Next:
        index = this.getNextIndex()
        break;
      case TypeIndexPaginator.Previous:
      case TypeIndexPaginator.Initial:
        index = this.getLastIndex()
        break;
      default:
        break;
    }
    return index
  }
}
