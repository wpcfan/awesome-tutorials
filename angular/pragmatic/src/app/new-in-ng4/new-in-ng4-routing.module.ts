import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  { path: 'newng', component: ReactiveComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewInNg4RoutingModule { }
export const routedComponents = [ReactiveComponent];