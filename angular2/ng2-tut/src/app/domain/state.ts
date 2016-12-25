import { Todo, Auth } from './entities';

export { Todo, Auth }

export interface AppState{
    todos: Todo[];
    todoFilter: any;
    auth: Auth;
}