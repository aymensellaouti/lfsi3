import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  @Output() fowardSelectedPerson = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.personnes = [
      new Personne(
        1,
        'sellaouti',
        'aymen',
        38,
        1234,
        'teacher',
        'rotating_card_profile.png'
      ),
      new Personne(
        2,
        'sellaouti2',
        'aymen2',
        38,
        4321,
        'teacher2',
        'rotating_card_profile2.png'
      ),
      new Personne(
        2,
        'sellaouti2',
        'aymen2',
        38,
        4321,
        'teacher2',
        'rotating_card_profile2.png'
      ),
    ];
  }

  forwardPersonne(selectedPersonne: Personne) {
    this.fowardSelectedPerson.emit(selectedPersonne);
  }
}
