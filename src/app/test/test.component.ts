import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  color = 'yellow';
  message = 'Bienvenu dans notre jeu, veuillez deviner le chiffre magique';
  ngOnInit(): void {
  }

  jouer(nombreSaisie) {
    if (nombreSaisie == 7) {
      this.message = 'Bravo vous avez deviné le chiffre magique';
      this.color = 'green';
    } else if (nombreSaisie < 7){
      this.message = 'plus grand';
      this.color = 'blue';
    } else {
      this.message = 'Plus petit';
      this.color = 'red';
    }
  }

}
