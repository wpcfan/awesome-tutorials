import { Todo } from './entities';

export { Todo }

export interface AppState{
    todos: Todo[],
    visibilityFilter: string
}