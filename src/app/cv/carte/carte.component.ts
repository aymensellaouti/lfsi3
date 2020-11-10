import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../model/personne';
import { EmbaucheService } from './../services/embauche.service';
import { CvService } from './../services/cv.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],
})
export class CarteComponent implements OnInit {
  personne: Personne = null;
  constructor(
    private embaucheService: EmbaucheService,
    private router: Router,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.cvService.selectItemSubject.subscribe(
      (personne) => this.personne = personne
    );
  }

  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }

  detail() {
    this.router.navigate(['cv', this.personne.id]);
  }
}
