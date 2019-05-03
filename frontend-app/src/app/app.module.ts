import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { NewBlogComponent } from './new-blog/new-blog.component';

import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeBlogComponent,
    EditBlogComponent,
    NewBlogComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'homeBlog',
        component: HomeBlogComponent
      },
      {
        path: 'editBlog/:id',
        component: EditBlogComponent
      },
      {
        path: 'newBlog',
        component: NewBlogComponent
      },
      {
        path: '',
        component: LoginComponent
      }
    ]),
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
