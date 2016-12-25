import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AuthGuardService } from './auth-guard.service';

import { HttpModule, JsonpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { todoReducer, todoFilterReducer } from '../reducers/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports:[
    HttpModule,
    JsonpModule,
    StoreModule.provideStore({ 
      todos: todoReducer, 
      todoFilter: todoFilterReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    { provide: 'auth', useClass: AuthService },
    { provide: 'user', useClass: UserService },
    AuthGuardService
    ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
