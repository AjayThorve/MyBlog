import { Injectable } from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  userId:string;
  constructor(private firebaseAuth: AngularFireAuth,private router: Router) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('success!', value);
        return 'success';
      })
      .catch(err => {
        console.log('something went wrong: ', err.message);
        return 'fail';
      });
  }

  login(email: string, password: string) {
  return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('success!', value);
        return 'success';
      })
      .catch(err =>{
        console.log('Something went wrong:', err.message);
        return 'failure';
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
    this.router.navigateByUrl('/login');

  }

  Gsignin() {
   return this.firebaseAuth
      .auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(value => {
        console.log('success!', value);
        return 'success';
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
        return 'failure';
      });
  }



}
