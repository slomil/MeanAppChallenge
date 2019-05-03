import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  loginToBlog(username, password) {
    const user = {
      username,
      password,
    };
    return this.http.post(`${this.uri}/login`, user).subscribe(
      (data) => {
      console.log('Successful!');
      this.router.navigate(['/homeBlog']);
      }
      );
  }
}
