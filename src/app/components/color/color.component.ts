import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  defaultColor = 'blue';
  color = this.defaultColor;
  constructor() { }

  ngOnInit(): void {
  }
  changeColor(newColor: string ) {
    this.color = newColor;
  }
  reset() {
    this.color = this.defaultColor;
  }

}
