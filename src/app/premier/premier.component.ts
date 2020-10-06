import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.css'],
})
export class PremierComponent implements OnInit {
  constructor() {}
  message = '';
  name = 'aymen';
  couleur = 'red';
  isHidden = false;
  ngOnInit(): void {}
  afficherCacher() {
    this.isHidden = !this.isHidden;
  }
  show(contenuInput: string) {
    this.message = contenuInput;
  }
}
