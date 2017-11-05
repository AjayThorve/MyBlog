import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AuthService } from './Services/auth.service';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule, MatButtonToggleModule
} from '@angular/material';

import {routing} from './app.routing';
import { AddBlogComponent } from './components/blogs/add-blog/add-blog.component';
import { ViewBlogComponent } from './components/blogs/view-blog/view-blog.component';
import { BlogComponent } from './components/blogs/blog/blog.component';
import {ArticleService} from './Services/article.service';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserLoginComponent,
    AddBlogComponent,
    ViewBlogComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase, 'BlogApplication'),
    FormsModule,
    HttpModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatButtonToggleModule
  ],
  providers: [ AuthService, ArticleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
