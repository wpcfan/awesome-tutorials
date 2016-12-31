import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent }   from './playground.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

@NgModule({
  imports: [
    SharedModule,
    PlaygroundRoutingModule
  ],
  declarations: [
    PlaygroundComponent, 
    OneComponent, 
    TwoComponent, ThreeComponent
  ]
})
export class PlaygroundModule { }
