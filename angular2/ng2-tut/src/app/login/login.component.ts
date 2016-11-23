//login.component.ts
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <form #formRef="ngForm">
        <input type="text"
          name="username"
          [(ngModel)]="username"
          #usernameRef="ngModel"
          required
          minlength="3"
          />
          <div *ngIf="usernameRef.errors?.required">this is required</div>
          <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
        <input type="password"
          name="password"
          [(ngModel)]="password"
          #passwordRef="ngModel"
          required
          />
          <div *ngIf="passwordRef.errors?.required">this is required</div>
        <button (click)="onClick()">Login</button>
        <button type="submit">Submit</button>
      </form>
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

  onSubmit(formValue) {
    console.log(formValue);
  }

}
