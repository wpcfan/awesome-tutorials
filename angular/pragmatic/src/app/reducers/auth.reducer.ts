import { Reducer, Action } from '@ngrx/store';
import { Auth } from '../domain/entities.interface';
import * as authAction from '../actions/auth.action';

const initialState: Auth = {}

export function authReducer (state: Auth = initialState, action: authAction.Actions): Auth {
  switch (action.type) {
    case authAction.ActionTypes.LOGIN_SUCCESS:
      return Object.assign({}, action.payload);
    case authAction.ActionTypes.LOGIN_FAIL:
      return Object.assign({}, state, {
        err: action.payload
      });
    case authAction.ActionTypes.LOGOUT:
      return initialState;
    case authAction.ActionTypes.REGISTER_SUCCESS:
      return Object.assign({}, action.payload);
    case authAction.ActionTypes.REGISTER_FAIL:
      return Object.assign({}, state, {
        err: action.payload
      });
    default:
      return state;
  }
}
