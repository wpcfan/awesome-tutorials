import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BingImageService } from './bing-image.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RegisterDialogComponent } from './register-dialog.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterDialogComponent
    ],
  entryComponents: [RegisterDialogComponent],
  providers: [
    BingImageService
  ]
})
export class LoginModule { }
