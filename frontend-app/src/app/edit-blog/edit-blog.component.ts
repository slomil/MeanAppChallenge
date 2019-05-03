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
  constructor(private blogService: BlogService,private router: Router) { }

  ngOnInit() {
    //console.log(this.router.url);
    this.id=this.router.url.slice(10);
    this.blog = this.getBlog(this.id);
    // this.blogService.getBlogs(this.username).subscribe(data => (this.blogs = data));
  }

  public editBlog(event) {
    this.blogService.editBlog(this.id);
  }

  public getBlog(id){
    return this.blogService.getBlog(id);
  }
}
