import { Injectable } from '@angular/core';

import {  AngularFirestore,
          AngularFirestoreCollection,
          AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

import { Article } from '../models/article';
import {AuthService} from './auth.service';

import { Router } from '@angular/router';



@Injectable()
export class ArticleService {

  articlesCollection: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;
  userId: string;
  constructor(public afs: AngularFirestore, public authService: AuthService, private router: Router) {
    this.articlesCollection = this.afs.collection('articles', ref => ref.orderBy('title', 'asc'));
    this.articles = this.articlesCollection.valueChanges();
    this.authService.user.subscribe(
      (auth) => {
        if (auth == null) {
          this.router.navigateByUrl('/login');
        } else {

          this.userId = auth.uid;
        }
      });
  }

  getArticles(){
    return this.articles;
  }

  addItem(art: Article) {
    art.id = this.userId;
    this.articlesCollection.add(art);
  }
}


