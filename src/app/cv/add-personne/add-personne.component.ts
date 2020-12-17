import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CvService } from './../services/cv.service';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css'],
})
export class AddPersonneComponent implements OnInit {
  constructor(private cvService: CvService, private router: Router) {}

  ngOnInit(): void {}
  addPersonne(formumaire: NgForm) {
    this.cvService.addPersonne(formumaire.value).subscribe(
      (personne) => this.router.navigate(['cv']),
      (erreur) => console.log(erreur)
    );
  }
}
