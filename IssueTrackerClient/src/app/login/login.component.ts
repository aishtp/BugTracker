import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '../Services/authenticator.service';
import { HttpCommonService } from '../Services/http-common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: login = {
    username: "",
    password : ""
  };
  incorrect : boolean = false;
  constructor(private authenticatorService : AuthenticatorService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
     this.authenticatorService.Login(this.login.username, this.login.password).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/trackIssues']);
      },
      (error) => {
        console.log(error);
        this.incorrect = true;
      }
     )};
  }

  


export class login {
  username : string = '';
  password : string = '';
}
