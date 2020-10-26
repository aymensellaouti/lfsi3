import { Injectable } from '@angular/core';
import { Todo } from './../model/todo';
import { LoggerService } from './../../serviecs/logger.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  constructor(private loggerService: LoggerService) {}
  log() {
    this.loggerService.logger(this.todos);
  }

  addTodo(todo: Todo) {
    if (!this.todos.length) {
      todo.id = 1;
    } else {
      todo.id = this.todos[this.todos.length - 1].id + 1;
    }
    this.todos.push(todo);
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);

    this.todos.splice(index, 1);
  }
}
