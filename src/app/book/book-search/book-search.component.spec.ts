import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

const response = {
  totalItems: 2,
  items: [
    { id:1,
      volumeInfo:
      {
        title: 'titulo',
        authors: ['author1'],
        imageLinks: {
          thumbnail: ''
        },
        pageCount: 1
      }
    },
    { id:2,
      volumeInfo:
      {
        title: 'titulo',
        authors: '',
        imageLinks: '',
        pageCount: 1
      }
    }
  ]
}

import { BookSearchComponent } from './book-search.component';

describe('BookSearchComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSearchComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
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

  it('handleInputValueChanges should update total items and books when query is empty', async() => {
    component.handleInputValueChanges('')
    expect(component.books.length).toBe(0)
    expect(component.totalItems).toBe(0)
  });

  it('handleInputValueChanges should update total items and books when query is empty', async() => {
    component.handleInputValueChanges('query')
    expect(component.query).toBe('query')
  });
});
