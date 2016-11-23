//login.component.ts
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <input type="text"
        [(ngModel)]="username"
        #usernameRef="ngModel"
        required
        minlength="3"
        />
        {{usernameRef.valid}}
      <input required type="password"
        [(ngModel)]="password"
        #passwordRef="ngModel"
        />
        {{passwordRef.valid}}
      <button (click)="onClick()">Login</button>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(@Inject('auth') private service) {
  }

  ngOnInit() {
  }

  onClick() {
    console.log('auth result is: '
      + this.service.loginWithCredentials(this.username, this.password));
  }

}
