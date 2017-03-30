import { NgModule } from '@angular/core';
import { ReactiveComponent } from './reactive/reactive.component';
import { NewInNg4RoutingModule } from './new-in-ng4-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    NewInNg4RoutingModule
  ],
  exports: [ReactiveComponent],
  declarations: [ReactiveComponent]
})
export class NewInNg4Module { }
