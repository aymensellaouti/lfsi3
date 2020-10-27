import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 38, 1234, 'teacher', '        '),
      new Personne(
        2,
        'sellaouti2',
        'aymen2',
        25,
        4321,
        'teacher2',
        'rotating_card_profile2.png'
      ),
      new Personne(2, 'sellaouti2', 'aymen2', 43, 4321, 'teacher2', ''),
    ];
  }

  getPersonnes(): Personne[] {
    return this.personnes;
  }
}
