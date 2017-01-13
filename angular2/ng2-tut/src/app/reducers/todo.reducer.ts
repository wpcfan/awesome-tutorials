import { Reducer, Action } from '@ngrx/store';
import { Todo } from '../domain/entities';
import { 
  ADD_TODO, 
  REMOVE_TODO, 
  TOGGLE_TODO,
  TOGGLE_ALL,
  CLEAR_COMPLETED,
  FETCH_FROM_API,
  VisibilityFilters
} from '../actions/todo.action';

export function todoReducer (state: Todo[] =[], action: Action) {
  switch (action.type) {
    case ADD_TODO:
      return [
          ...state,
          action.payload
          ];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    case TOGGLE_TODO:
      return state.map(todo => {
        if(todo.id !== action.payload.id){
          return todo;
        }
        return Object.assign({}, todo, {completed: !todo.completed});
      });
    case TOGGLE_ALL:
      return state.map(todo => {
        return Object.assign({}, todo, {completed: !todo.completed});
      });
    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed);
    case FETCH_FROM_API:
      return [
        ...action.payload
      ];
    default:
      return state;
  }
}

export function todoFilterReducer (state = (todo: Todo) => todo, action: Action) {
  switch (action.type) {
    case VisibilityFilters.SHOW_ALL:
      return todo => todo;
    case VisibilityFilters.SHOW_ACTIVE:
      return todo => !todo.completed;
    case VisibilityFilters.SHOW_COMPLETED:
      return todo => todo.completed;
    default:
      return state;
  }
}