/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  it('should ...', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));
});
