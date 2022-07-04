import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

declare const google: any;
const client_id = environment.client_id

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public metaService: Meta,
    public userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadScriptDynamically()
      .then(() => {
        google.accounts.id.initialize({
          client_id: client_id,
          callback: this.handleCredentialResponse
        })
        google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          { theme: "outline", size: "large" }
        )
    })
  }

  public loadScriptDynamically(): Promise<any> {
    var script = document.createElement('script')
    script.src = "https://accounts.google.com/gsi/client"
    script.async = true
    document.head.appendChild(script)
    return new Promise((resolve, reject) => {
      script.onload = resolve
    })
  }

  handleCredentialResponse = (response: any) => {
    /*var decoded = jwt_decode(response.credential)
    console.log(response.credential)

    console.log(decoded)*/
    this.userService.loginGoogle( response.credential )
      .subscribe( resp => {
        this.router.navigateByUrl('/')
    })
  }
}
