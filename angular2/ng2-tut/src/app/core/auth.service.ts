import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, Auth } from '../domain/state';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import {
  LOGIN,
  LOGIN_FAILED_NOT_EXISTED,
  LOGIN_FAILED_NOT_MATCH,
  LOGOUT,
  REGISTER,
  REGISTER_FAILED_EXISTED
} from '../actions/auth.action'

@Injectable()
export class AuthService {
   
  constructor(
    private http: Http, 
    private userService: UserService,
    private store$: Store<AppState>,
    private router: Router) {
  }
  getAuth(): Observable<Auth> {
    return this.store$.select(appState => appState.auth);
  }
  unAuth(): void {
    this.store$.dispatch({type: LOGOUT});
  }
  register(username: string, password: string): void {
    let toAddUser = {
      username: username,
      password: password
    };
    this.userService
      .findUser(username)
      .subscribe(user => {
        if(user != null) 
          this.store$.dispatch({type: REGISTER_FAILED_EXISTED});
        else
          this.store$.dispatch({type: REGISTER, payload: {
            user: toAddUser,
            hasError: false,
            errMsg: null,
            redirectUrl: null
          }});
      });
  }
  loginWithCredentials(username: string, password: string): void {
    this.userService
      .findUser(username)
      .subscribe(user => {
        if (null === user){
          this.store$.dispatch({type: LOGIN_FAILED_NOT_EXISTED});
        }
        else if(password !== user.password) {
          this.store$.dispatch({type: LOGIN_FAILED_NOT_MATCH});
        }
        else{
          this.store$.dispatch({type: LOGIN, payload: {
            user: user,
            hasError: false,
            errMsg: null,
            redirectUrl: null
          }});
          this.router.navigate(['todo']);
        }
      });
  }
}
