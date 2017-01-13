import { Reducer, Action } from '@ngrx/store';
import { Auth } from '../domain/entities';
import { 
  LOGIN_FAILED_NOT_EXISTED,
  LOGIN_FAILED_NOT_MATCH,
  LOGOUT,
  LOGIN,
  REGISTER,
  REGISTER_FAILED_EXISTED
} from '../actions/auth.action';

export function authReducer (state: Auth = {
    user: null, 
    hasError:true, 
    errMsg: null, 
    redirectUrl: null
  }, action: Action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, action.payload, {hasError: false});
    case LOGIN_FAILED_NOT_EXISTED:
      return Object.assign({}, state, {
        user: null,
        hasError: true, 
        errMsg: 'Username not existed'
      });
    case LOGIN_FAILED_NOT_MATCH:
      return Object.assign({}, state, {
        user: null,
        hasError: true, 
        errMsg: 'Password not match'
      });
    case LOGOUT:
      return Object.assign({}, state, {
        user: null, 
        hasError: true, 
        errMsg: 'no credentials', 
        redirectUrl: '/login'
      });
    case REGISTER:
      return Object.assign({}, action.payload, {hasError: false});
    case REGISTER_FAILED_EXISTED:
      return Object.assign({}, state, {
        user: null,
        hasError: true, 
        errMsg: 'username existed'
      });
    default:
      return state;
  }
}
