import { Injectable, Inject } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Router,
  Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot }    from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    @Inject('auth') private authService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let url: string = state.url;

    return this.authService.getAuth()
      .map(auth => !auth.hasError);
  }
  canLoad(route: Route): Observable<boolean> {
    let url = `/${route.path}`;

    return this.authService.getAuth()
      .map(auth => !auth.hasError);
  }
}
