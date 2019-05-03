import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  public loginUser(event) {
    const data = event.target;
    const username = data.querySelector('#username').value;
    const password = data.querySelector('#password').value;
    localStorage.setItem('username', username);
    this.loginService.loginToBlog(username, password);
   // console.log(username, password);

  }
}
