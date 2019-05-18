import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import { Blog } from '../blog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  blog;
  id;
  author;
  title;
  content;
  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit() {

    this.id = this.router.url.slice(10);
    this.blog = this.getBlog(this.id);
    // this.blogService.getBlogs(this.username).subscribe(data => (this.blogs = data));
  }

  public editBlog(event) {
    const data = event.target;
    this.id = this.blog.id;
    this.author = data.querySelector('#author').value;
    this.title = data.querySelector('#title').value;
    this.content = data.querySelector('#content').value;
    this.blogService.editBlog(this.id, this.author, this.title, this.content);
  }

  public getBlog(id) {
    return this.blogService.getBlog(id).subscribe(data => {
      this.blog = data;
    });
  }
}
