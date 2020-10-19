import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-example',
  templateUrl: './ngstyle-example.component.html',
  styleUrls: ['./ngstyle-example.component.css'],
})
export class NgstyleExampleComponent implements OnInit {
  @Input() couleur = 'blue';
  @Input() bgc = 'pink';
  font = 'verdana';
  size = '45px';
  constructor() {}

  ngOnInit(): void {}
}
