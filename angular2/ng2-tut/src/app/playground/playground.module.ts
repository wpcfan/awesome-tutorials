import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent }   from './playground.component';
import { PlaygroundService } from './playground.service';
import { TrimSpacePipe } from './trim-space.pipe';
import { LogOnClickDirective } from './log-on-click.directive';

@NgModule({
    imports: [
        SharedModule,
        PlaygroundRoutingModule
    ],
    providers:[
        PlaygroundService
    ],
    declarations: [
        PlaygroundComponent, 
        TrimSpacePipe,
        LogOnClickDirective
        ]
})
export class PlaygroundModule { }
