import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Auth } from '../domain/entities';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';
  auth: Auth;

  constructor(@Inject('auth') private service, private router: Router) { }

  onSubmit(){
    this.service
      .loginWithCredentials(this.username, this.password)
      .subscribe(auth => {
        // let redirectUrl = (auth.redirectUrl === null || auth.redirectUrl === undefined)
        //   ? '/': auth.redirectUrl;
        this.auth = Object.assign({}, auth);
        if(!auth.hasError){
          this.router.navigate(['todo']);
        }
      });
  }

}
