import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent }   from './playground.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { TrimSpacePipe } from './trim-space.pipe';
import { LogOnClickDirective } from './log-on-click.directive';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    PlaygroundRoutingModule
  ],
  declarations: [
    PlaygroundComponent, 
    OneComponent, 
    TwoComponent, 
    ThreeComponent, 
    FormDemoComponent,
    TrimSpacePipe,
    LogOnClickDirective
  ]
})
export class PlaygroundModule { }
