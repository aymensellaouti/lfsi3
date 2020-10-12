import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  test = 'contenu';
  constructor() { }

  ngOnInit(): void {
  }
  resetText() {
    this.test = 'nouveau contenu';
  }

}
