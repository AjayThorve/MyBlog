import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password).then(
      (value) => {
        console.log(value);
        if(value == 'success'){
          console.log('reached here');
          this.router.navigateByUrl('/dashboard');
        }
      }
    );
    this.email = this.password = '';
  }

  Gsignin() {
    this.authService.Gsignin().then(
      (value) => {
        console.log(value);
        if(value == 'success'){
          console.log('reached here');
          this.router.navigateByUrl('/dashboard');
        }
      }
    );

    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }

}
