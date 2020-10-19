import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-example',
  templateUrl: './ngclass-example.component.html',
  styleUrls: ['./ngclass-example.component.css'],
})
export class NgclassExampleComponent implements OnInit {
  isAllume = false;
  title = 'eteindre';
  constructor() {}

  ngOnInit(): void {}
  allumerEteindre() {
    this.title !== 'allume'
      ? (this.title = 'allume')
      : (this.title = 'eteindre');
    this.isAllume = !this.isAllume;
  }
}
