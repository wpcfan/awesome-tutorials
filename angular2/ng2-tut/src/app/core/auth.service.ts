import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { ReplaySubject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import { Auth } from '../domain/entities';

@Injectable()
export class AuthService {
  auth: Auth = {hasError: true, redirectUrl: '', errMsg: 'not logged in'};
  subject: ReplaySubject<Auth> = new ReplaySubject<Auth>(1);
  constructor(private http: Http, @Inject('user') private userService) {
  }
  getAuth(): Observable<Auth> {
    return this.subject.asObservable();
  }
  unAuth(): void {
    this.auth = Object.assign(
      {},
      this.auth,
      {user: null, hasError: true, redirectUrl: '', errMsg: 'not logged in'});
    this.subject.next(this.auth);
  }
  register(username: string, password: string): Observable<Auth> {
    let toAddUser = {
      username: username,
      password: password
    };
    return this.userService
            .findUser(username)
            .filter(user => user === null)
            .switchMap(user => {
              return this.userService.addUser(toAddUser).map(u => {
                this.auth = Object.assign(
                  {},
                  { user: u, hasError: false, errMsg: null, redirectUrl: null}
                );
                this.subject.next(this.auth);
                return this.auth;
              });
            });
  }
  loginWithCredentials(username: string, password: string): Observable<Auth> {
    return this.userService
      .findUser(username)
      .map(user => {
        let auth = new Auth();
        if (null === user){
          auth.user = null;
          auth.hasError = true;
          auth.errMsg = 'user not found';
        } else if (password === user.password) {
          auth.user = user;
          auth.hasError = false;
          auth.errMsg = null;
        } else {
          auth.user = null;
          auth.hasError = true;
          auth.errMsg = 'password not match';
        }
        this.auth = Object.assign({}, auth);
        this.subject.next(this.auth);
        return this.auth;
      });
  }
}
