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
        {{ usernameRef.errors | json }}
        <div *ngIf="usernameRef.errors?.required">this is required</div>
        <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
      <input required type="password"
        [(ngModel)]="password"
        #passwordRef="ngModel"
        />
        <div *ngIf="passwordRef.errors?.required">this is required</div>
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
