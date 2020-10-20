import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testng-if',
  templateUrl: './testng-if.component.html',
  styleUrls: ['./testng-if.component.css'],
})
export class TestngIFComponent implements OnInit {
  show = false;
  constructor() {}

  ngOnInit(): void {}
  changeMe() {
    this.show = !this.show;
  }
}
