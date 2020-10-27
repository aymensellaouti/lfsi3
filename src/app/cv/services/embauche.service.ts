import { Injectable } from '@angular/core';
import { Personne } from './../model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private embauchees: Personne[] = [];
  constructor() { }

  getEmbauches() {
    return this.embauchees;
  }

  embaucher(personne: Personne) {
    /*
      Si la personne est déjà embauchée => Alerte personne déjà embauché
      Sinon emabucher
    */
   const index = this.embauchees.indexOf(personne);

   if (index > -1) {
     alert('Personne déjà sélectionnée');
   } else {
     this.embauchees.push(personne);
   }
  }
}
