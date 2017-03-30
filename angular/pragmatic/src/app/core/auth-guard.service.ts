import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Router,
  Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot }    from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../domain/entities.interface';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private router: Router, private store$: Store<AppState>) { }
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable<boolean> {
    const url: string = state.url;
    
    return this.store$.select(appState => appState.auth)
      .map(auth => auth.err !== undefined);
  }
  canLoad(route: Route): Observable<boolean> {
    let url = `/${route.path}`;
    return this.store$.select(appState => appState.auth)
      .map(auth => auth.err !== undefined);
  }
}
