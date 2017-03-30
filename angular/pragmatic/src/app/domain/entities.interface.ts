import { RouterState } from '@ngrx/router-store';

export interface User {
  id?: string;
  name: string;
  password?: string;
  gender?: boolean;
  phone?: string;
}

export interface Err {
  timestamp: Date;
  status: number;
  error: string;
  exception: string;
  message: string;
  path: string;
}

export interface Auth {
  user?: User;
  err?: Err;
  token?: string;
}

export interface AppState{
  auth: Auth;
  router: RouterState;
}