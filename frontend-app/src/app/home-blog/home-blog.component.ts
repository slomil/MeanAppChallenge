import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import {BlogService} from '../blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.css']
})
export class HomeBlogComponent implements OnInit {

  id;
  blogs: Blog[] = [];
  username;
  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit() {
    this.getBlogs().subscribe(data => (this.blogs = data));
  }

  getBlogs() {
    this.username = localStorage.getItem('username');
    return this.blogService.getBlogs(this.username);
  }

  public deleteBlog(event) {

    this.id = event.target.id;
    this.blogService.deleteBlog(this.id);
    this.blogs = this.blogs.filter(data => {data.id! = this.id; });
  }
}
