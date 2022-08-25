import { Injectable } from '@angular/core';

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
      case 'Next':
        index = this.getNextIndex()
        break;
      case 'Previous':
      case 'Initial':
        index = this.getLastIndex()
        break;
      default:
        break;
    }
    return index
  }
}
