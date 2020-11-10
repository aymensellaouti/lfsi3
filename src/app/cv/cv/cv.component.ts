import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { Personne } from './../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  nombreDePersonneSelectionne = 0;
  selectedPersonne: Personne = null;
  selected = '';
  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvService.selectItemSubject.subscribe((personne) => {
      this.nombreDePersonneSelectionne++;
      this.selected = `${personne.name} ${personne.firstname}`;
    });
  }
}
