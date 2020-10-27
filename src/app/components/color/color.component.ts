import { Component, OnInit } from '@angular/core';
import { LoggerService } from './../../serviecs/logger.service';
import { TodoService } from './../../todo/services/todo.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  defaultColor = 'blue';
  color = this.defaultColor;
  constructor(
    private loggerService: LoggerService,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.loggerService.logger('Bienvenu dans color component');
  }
  changeColor(newColor: string ) {
    this.color = newColor;
  }
  reset() {
    this.color = this.defaultColor;
    this.todoService.log();
  }

}
