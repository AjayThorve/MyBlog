import { Component, OnInit } from '@angular/core';
import { ArticleService} from '../../../Services/article.service';
import {Article} from '../../../models/article';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  art: Article[];
  constructor(private articles: ArticleService) { }

  ngOnInit() {
    this.articles.getArticles().subscribe(article => {
      this.art = article;
    });
  }

}
