import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {

  /*
  1- Crée mon emtteur d'évenement
  2- Dire quand j'emet mon evenement
  3- Mettre les données à envoyer à mon pére
  */

  @Input() messageFromPere = 'J ai encore rien recu';
  @Output() sendDataToFather = new EventEmitter();
  favoriteColor = 'red';
  constructor() {}
  sendData() {
    this.sendDataToFather.emit(
      'Cc papa'
    );
  }
  ngOnInit(): void {}
}
