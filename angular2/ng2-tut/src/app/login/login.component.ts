import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <input #usernameRef type="text">
      <input #passwordRef type="password">
      <button (click)="onClick(usernameRef.value, passwordRef.value)">Login</button>
    </div>
  `,
  styles: [],
  //在providers中配置AuthService
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  //在构造函数中将AuthService示例注入到成员变量service中
  //而且我们不需要显式声明成员变量service了
  constructor(private service: AuthService) {
  }

  ngOnInit() {
  }

  onClick(username, password) {
    console.log('auth result is: ' + this.service.loginWithCredentials(username, password));
  }

}
