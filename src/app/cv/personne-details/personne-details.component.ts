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
      this.personne = this.cvService.getPersonneById(+lesRouteParams.id);
      if (!this.personne) {
        this.router.navigate(['cv']);
      }
    });
  }
  delete() {
    const isDeleted = this.cvService.deletePersonne(this.personne);
    if (isDeleted) {
      this.router.navigate(['cv']);
    }
  }
}
