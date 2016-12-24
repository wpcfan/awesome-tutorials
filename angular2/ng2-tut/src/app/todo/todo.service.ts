import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { UUID } from 'angular2-uuid';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Store } from '@ngrx/store';
import { Todo } from '../domain/entities';

import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  TOGGLE_ALL,
  CLEAR_COMPLETED
} from '../actions/todo.action'

@Injectable()
export class TodoService {

  private api_url = 'http://localhost:3000/todos';
  private headers = new Headers({'Content-Type': 'application/json'});
  private userId: string;
  
  constructor(
    private http: Http, 
    @Inject('auth') private authService,
    private store$: Store<Todo[]>
    ) {
    this.authService.getAuth()
      .filter(auth => auth.user != null)
      .subscribe(auth => this.userId = auth.user.id);
  }

  // POST /todos
  addTodo(desc:string): void{
    let todoToAdd = {
      id: UUID.UUID(),
      desc: desc,
      completed: false,
      userId: this.userId
    };
    this.http
      .post(this.api_url, JSON.stringify(todoToAdd), {headers: this.headers})
      .map(res => res.json() as Todo)
      .subscribe(todo => {
        this.store$.dispatch({type: ADD_TODO, payload: todo});
      });
  }
  // It was PUT /todos/:id before
  // But we will use PATCH /todos/:id instead
  // Because we don't want to waste the bytes those don't change
  toggleTodo(todo: Todo): void {
    const url = `${this.api_url}/${todo.id}`;
    let updatedTodo = Object.assign({}, todo, {completed: !todo.completed});
    this.http
      .patch(url, JSON.stringify({completed: !todo.completed}), {headers: this.headers})
      .mapTo(updatedTodo)
      .subscribe(todo => {
        this.store$.dispatch({
          type: TOGGLE_TODO, 
          payload: updatedTodo
        });
      });
  }
  // DELETE /todos/:id
  removeTodo(todo: Todo): void {
    const url = `${this.api_url}/${todo.id}`;
    this.http
      .delete(url, {headers: this.headers})
      .mapTo(Object.assign({}, todo))
      .subscribe(todo => {
        this.store$.dispatch({
          type: REMOVE_TODO,
          payload: todo
        });
      });
  }
  // GET /todos
  getTodos(): Observable<Todo[]> {
    return this.http.get(`${this.api_url}?userId=${this.userId}`)
      .map(res => res.json() as Todo[]);
  }
  
  toggleAll(): void{
    this.getTodos()
      .flatMap(todos => Observable.from(todos))
      .flatMap(todo=> { 
        const url = `${this.api_url}/${todo.id}`;
        let updatedTodo = Object.assign({}, todo, {completed: !todo.completed});
        return this.http
          .patch(url, JSON.stringify({completed: !todo.completed}), {headers: this.headers})
      })
      .subscribe(()=>{
        this.store$.dispatch({
          type: TOGGLE_ALL
        });
      })
  }
  
  clearCompleted(): void {
    this.getTodos()
      .flatMap(todos => Observable.from(todos.filter(t => t.completed)))
      .flatMap(todo=> {
        const url = `${this.api_url}/${todo.id}`;
        return this.http
          .delete(url, {headers: this.headers})
      })
      .subscribe(()=>{
        this.store$.dispatch({
          type: CLEAR_COMPLETED
        });
      });
  }
}
