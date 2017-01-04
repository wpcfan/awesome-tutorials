import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent }   from './playground.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FormDemoComponent } from './form-demo/form-demo.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    PlaygroundRoutingModule
  ],
  declarations: [
    PlaygroundComponent, 
    OneComponent, 
    TwoComponent, ThreeComponent, FormDemoComponent
  ]
})
export class PlaygroundModule { }
