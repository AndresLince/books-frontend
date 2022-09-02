import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadedBooksComponent } from './readed-books.component';

const response = {
  totalItems: 2,
  books: [
    {
      id:1,
      author: 'author1',
      image: 'image'
    },
    {
      id:2,
      author: '',
      image: ''
    }
  ]
}

describe('ReadedBooksComponent', () => {
  let component: ReadedBooksComponent;
  let fixture: ComponentFixture<ReadedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadedBooksComponent ],
      imports: [
        HttpClientTestingModule
      ]
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

  it('handle response should update total items and books', async() => {
    component.handleResponse(response)
    expect(component.books.length).toBe(2)
    expect(component.totalItems).toBe(2)
  });
});
