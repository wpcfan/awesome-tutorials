import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent }   from './playground.component';

@NgModule({
    imports: [
        SharedModule,
        PlaygroundRoutingModule
    ],
    declarations: [PlaygroundComponent]
})
export class PlaygroundModule { }
