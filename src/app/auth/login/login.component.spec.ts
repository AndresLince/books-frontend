import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { of } from 'rxjs';
import { LoginResponseInterface } from 'src/app/interfaces/login-response.interface';
import { UserService } from 'src/app/services/user.service';

import { LoginComponent } from './login.component';

const userServiceMock = {
  loginGoogle : () => true
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userService: UserService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: UserService, useValue: userServiceMock}
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("HandleCredentialResponse should call loginGoogle", async() => {
    const response: LoginResponseInterface = { token: '' }
    userService = fixture.debugElement.injector.get(UserService)
    const loginGoogleSpy = spyOn(userService, 'loginGoogle').and.returnValue(of(response))

    component.handleCredentialResponse({})

    fixture.detectChanges();
    expect(loginGoogleSpy).toHaveBeenCalled()
  });
});
