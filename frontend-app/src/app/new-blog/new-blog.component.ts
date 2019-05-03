import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {HomeBlogComponent} from '../home-blog/home-blog.component';
import { Blog } from '../blog';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {

  blogs: Blog[] = [];
  username;
  constructor(private blogService: BlogService, public homeComponent: HomeBlogComponent) { }

  ngOnInit() {
  }

  public newBlog(event) {
    const data = event.target;
    console.log('Saving blog....' + data);
    const id=this.getId();
    const author = localStorage.getItem('username');
    const title = data.querySelector('#title').value;
    const content = data.querySelector('#content').value;
    this.blogService.newBlog(id,author, title, content);
  }

  public getId() {
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
};

}
