import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere-color',
  templateUrl: './pere-color.component.html',
  styleUrls: ['./pere-color.component.css']
})
export class PereColorComponent implements OnInit {
  color= 'gold';
  constructor() { }

  ngOnInit(): void {
  }
  processColor(sonColor: string) {
    this.color = sonColor;
  }

}
