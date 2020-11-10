import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[];

  //C'est une source de données
  // On peut s'inscrire pour recvoire les infos (Observable)
  // On peut broadcaster une nouvelle information (observer via la methode next)
  public selectItemSubject = new Subject<Personne>();
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 38, 1234, 'teacher', 'as.jpg'),
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
    if (index < 0) {
      return 0;
    } else {
      this.personnes.splice(index, 1);
      return 1;
    }
  }

  // Broadcaster l'information de selection et envoyer la personne sélectionnée
  public selectPersonne(personne: Personne) {
    this.selectItemSubject.next(personne);
  }
}
