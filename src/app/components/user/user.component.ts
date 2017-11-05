import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  items: Observable<any[]>;
  displayName: string;

  constructor(db: AngularFirestore, public authService: AuthService, private router: Router) {

    this.authService.user.subscribe(
      (auth) => {
        if(auth == null){
          this.router.navigateByUrl('/login');
        }else{
          this.items = db.collection('items').valueChanges();
          this.displayName = auth.displayName;
        }
      }
    );
  }

  ngOnInit(){

  }

}
