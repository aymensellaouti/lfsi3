import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils-color',
  templateUrl: './fils-color.component.html',
  styleUrls: ['./fils-color.component.css'],
})
export class FilsColorComponent implements OnInit {
  @Input() bgColor = 'green';
  @Input() color = 'yellow';
  @Input() favoriteColor = 'red';
  @Output() sendFavoriteColor = new EventEmitter();
  /*
  1-* Créer un eventEmitter qui me permet d'envoyer ma couleur favorite
  2- Créer un bouton pour déclencher l'envoi
  3- Créer la méthode qui appelé après le click et qui envoi l'envent
  avec la coueur favorite
  */
  constructor() {}
  sendColor() {
    this.sendFavoriteColor.emit(this.favoriteColor);
  }
  ngOnInit(): void {}
}
