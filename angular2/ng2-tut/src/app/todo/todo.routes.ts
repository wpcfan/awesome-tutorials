import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';

export const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  }
];
export const routing = RouterModule.forChild(routes);
