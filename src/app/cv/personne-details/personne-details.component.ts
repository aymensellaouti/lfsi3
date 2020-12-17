import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../model/personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css'],
})
export class PersonneDetailsComponent implements OnInit {
  personne: Personne = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((lesRouteParams) => {
       this.cvService.getPersonneById(+lesRouteParams.id).subscribe(
        (personne) => this.personne = personne,
        (erreur) => {
          console.log(`Personne d'id ${+lesRouteParams.id} not founde`);
          this.router.navigate(['cv']);
        }
       );
    });
  }
  delete() {
    this.cvService.deletePersonne(this.personne).subscribe(
      (reponse) =>       this.router.navigate(['cv']),
      (erreur) => console.log(erreur)
    )
  }
}
