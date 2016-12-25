export class Todo {
  id?: string;
  desc: string;
  completed: boolean;
  userId?: number;
}
export class User {
  id?: number;
  username: string;
  password: string;
}
export class Auth {
  user?: User;
  hasError: boolean;
  errMsg: string;
  redirectUrl: string;
}
export class Image {
  contentUrl: string;
  name: string;
}
export interface Item {
  id: number;
  name: string;
  description: string;
};
export interface AppStore{
  items: Item[];
  selectedItem: Item;
}