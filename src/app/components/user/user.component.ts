import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  items: Observable<any[]>;

  constructor(db: AngularFirestore, public authService: AuthService) {
    this.items = db.collection('items').valueChanges();
  }

  ngOnInit(){

  }

}
