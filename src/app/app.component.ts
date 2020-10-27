import { Component, OnInit } from '@angular/core';
import { env } from 'process';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(environment.testVar);
  }
  title = 'lfsi3';
}
