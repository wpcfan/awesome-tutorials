import {
  Component,
  Inject,
  trigger,
  state,
  style,
  transition,
  animate,
  OnDestroy
} from '@angular/core';

import { MdDialog } from '@angular/material';
import { Auth, Image } from '../domain/entities';
import { RegisterDialogComponent } from './register-dialog.component';
import { AuthService } from '../core/auth.service';
import { BingImageService } from './bing-image.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('loginState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active',   style({
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class LoginComponent implements OnDestroy{

  username = '';
  password = '';
  slides: Image[] = [];
  photo = '/assets/login_default_bg.jpg';
  loginBtnState: string = 'inactive';
  subscription: Subscription;

  constructor(
    private authService: AuthService,
    private bingService: BingImageService,
    private dialog: MdDialog) {
    this.subscription = this.bingService.getImageUrl()
      .subscribe((images: Image[]) => {
        this.slides = [...images];
        this.rotateImages(this.slides);
      });
  }
  ngOnDestroy(){
    if(this.subscription !== undefined)
      this.subscription.unsubscribe();
  }
  onSubmit(){
    this.authService
      .loginWithCredentials(this.username, this.password);
  }
  rotateImages(arr: Image[]){
    const length = arr.length
    let i = 0;
    setInterval(() => {
      i = (i + 1) % length;
      this.photo = this.slides[i].contentUrl;
    }, 4000);
  }
  toggleLoginState(state: boolean){
    this.loginBtnState = state ? 'active' : 'inactive';
  }
  register($event: MouseEvent){
    let pDialog = this.dialog.open(RegisterDialogComponent, {
      width: '350px'
    });
  }
}
