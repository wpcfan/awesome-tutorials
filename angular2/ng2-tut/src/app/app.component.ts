import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/auth.service';
import { Store } from '@ngrx/store';
import { AppState, Auth } from './domain/state';
import { Observable } from 'rxjs/Observable';
import {
  LOGOUT
} from './actions/auth.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Awesome Todos';
  auth$: Observable<Auth>;
  constructor(
    private store$: Store<AppState>, 
    private router: Router){
      this.auth$ = this.store$.select(appState => appState.auth);
  }
  login() {
    this.router.navigate(['login']);
  }
  logout(){
    this.store$.dispatch({type: LOGOUT});
    this.router.navigate(['login']);
  }
}
