import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggerService } from './../../serviecs/logger.service';
import { TodoService } from './../../todo/services/todo.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  defaultColor = 'blue';
  color = this.defaultColor;
  constructor(
    private loggerService: LoggerService,
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loggerService.logger('Bienvenu dans color component');
    this.activatedRoute.params.subscribe((mesParams) => {
      this.color = mesParams.couleur;
    });
  }
  changeColor(newColor: string) {
    this.color = newColor;
  }
  reset() {
    this.color = this.defaultColor;
    this.todoService.log();
  }
}
