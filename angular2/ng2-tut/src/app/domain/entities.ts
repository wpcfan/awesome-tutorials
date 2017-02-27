export interface Todo {
  id?: string;
  desc: string;
  completed: boolean;
  userId?: number;
}
export interface User {
  id?: number;
  username: string;
  password: string;
}
export interface Auth {
  user?: User;
  hasError: boolean;
  errMsg?: string;
  redirectUrl?: string;
}
export interface Image {
  contentUrl: string;
  name: string;
}