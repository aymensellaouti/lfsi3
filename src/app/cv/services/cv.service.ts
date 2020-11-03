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
      new Personne(3, 'sellaouti2', 'aymen2', 43, 4321, 'teacher2', ''),
    ];
  }

  getPersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonneById(id: number): Personne {
    return this.personnes.find((personne) => personne.id === id);
  }
  deletePersonne(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    if(index < 0) {
      return 0;
    } else {
      this.personnes.splice(index, 1);
      return 1;
    }
  }
}
