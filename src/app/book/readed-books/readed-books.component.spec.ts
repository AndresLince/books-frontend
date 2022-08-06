import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadedBooksComponent } from './readed-books.component';

describe('ReadedBooksComponent', () => {
  let component: ReadedBooksComponent;
  let fixture: ComponentFixture<ReadedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadedBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
