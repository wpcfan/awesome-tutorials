import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from './todo.service';
import { Todo } from '../domain/entities';

import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos : Observable<Todo[]>;

  constructor(
    @Inject('todoService') private service,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.route.params
      .pluck('filter')
      .subscribe(filter => {
        this.service.filterTodos(filter);
        this.todos = this.service.todos;
      })
  }
  addTodo(desc: string) {
    this.service.addTodo(desc);
  }
  toggleTodo(todo: Todo) {
    this.service.toggleTodo(todo);
  }
  removeTodo(todo: Todo) {
    this.service.deleteTodo(todo);
  } 
  toggleAll(){
    this.service.toggleAll();
  }
  clearCompleted(){
    this.service.clearCompleted();
  }
}
