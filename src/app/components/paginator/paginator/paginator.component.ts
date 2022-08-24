import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() totalItems: number = 0
  @Output() newPage: EventEmitter<string> = new EventEmitter;
  itemsPerPage: number = 10
  startIndex: number = 0
  currentPage: number = 1
  totalPages: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage)
  }

  changePage(type: string, carryover: number): void {
    this.currentPage += carryover
    this.newPage.emit(type)
  }

}
