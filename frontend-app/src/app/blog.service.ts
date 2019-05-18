import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: Blog[] = [];
  uri = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  //
  getBlogs(username): Observable<Blog[]> {
    return this.http.get(`${this.uri}/getBlogs/${username}`).pipe(
      map ((data: Blog[]) => {
        this.blogs = data;
        return this.blogs;
      }
    ));

  }

  //
  newBlog(id, author, title, content) {
    const blog = {
      id,
      author,
      title,
      content
    };
    this.http.post(`${this.uri}/newBlog/`, blog).subscribe(
      (data) => {
        console.log('Successful saving!');
        this.router.navigate(['/homeBlog']);
        alert('New blog created!');
      }
    );
  }

  //
  getBlog(id): Observable<Blog> {
    return this.http.get(`${this.uri}/getBlog/${id}`).pipe(
      map((data: Blog) => {
        return data;
      })
    );
  }
  //
  editBlog(id, author, title, content) {
    const blog = {
      id,
      author,
      title,
      content
    };
    this.http.put(`${this.uri}/editBlog/${id}`, blog).subscribe(
      data => {
      console.log('Successfully edited: ' + data);
      alert('Successfully edited!');
      }
    );
  }

  deleteBlog(id) {
    this.http.delete(`${this.uri}/deleteBlog/${id}`).subscribe(
      (data) => {
        console.log('Successfully deleted.');
        alert('Successfully deleted!');
      }
    );
  }



}
