import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {
  todoService = inject(TodosService);

  todoitems = signal<Array<todo>>([]);

  ngOnInit(): void {
    console.log(this.todoService.todoItems);

    this.todoitems.set(this.todoService.todoItems);
  }
}
