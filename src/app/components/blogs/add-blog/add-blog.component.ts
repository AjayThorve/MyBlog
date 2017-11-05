import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Article } from '../../../models/article';
import {AuthService} from '../../../Services/auth.service';
import {ArticleService} from '../../../Services/article.service';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  art: Article = {
    id:'',
      title:'',
      content:''
  }

  constructor(db: AngularFirestore, public authService: AuthService, public articleService: ArticleService) { }

  ngOnInit() {
  }

  onSubmit(){
      if(this.art.title !== '' && this.art.content !== '') {
        this.articleService.addItem(this.art);
        this.art.title = '';
        this.art.content = '';
      }
  }
}
