import { Action } from '@ngrx/store';
import { type } from '../utils/type';
import { Auth, Err } from '../domain/entities.interface';

export const ActionTypes = {
  LOGIN_SUCCESS:     type('[Auth] Login Success'),
  LOGIN_FAIL:        type('[Err] Login Fail'),
  REGISTER_SUCCESS:  type('[Auth] Register Success'),
  REGISTER_FAIL:     type('[Err] Register Fail'),
  LOGOUT:            type('[Auth] Logout')
};


export class LoginSuccessAction implements Action {
  type = ActionTypes.LOGIN_SUCCESS;
  constructor(public payload: Auth){}
}

export class LoginFailAction implements Action {
  type = ActionTypes.LOGIN_FAIL;
  constructor(public payload: Err){}
}

export class RegisterSuccessAction implements Action {
  type = ActionTypes.REGISTER_SUCCESS;
  constructor(public payload: Auth){}
}

export class RegisterFailAction implements Action {
  type = ActionTypes.REGISTER_FAIL;
  constructor(public payload: Err){}
}

export class LogoutAction implements Action {
  type = ActionTypes.LOGOUT;
  constructor(public payload: Auth){}
}

export type Actions
  = LoginSuccessAction
  | LoginFailAction
  | RegisterSuccessAction
  | RegisterFailAction
  | LogoutAction;