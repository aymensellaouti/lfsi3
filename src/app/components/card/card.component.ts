import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  name = 'aymen';
  job = 'teacher';
  path = 'rotating_card_thumb2.png';
  constructor() { }

  ngOnInit(): void {
  }

}
