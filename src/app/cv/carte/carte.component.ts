import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { EmbaucheService } from './../services/embauche.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor(
    private embaucheService: EmbaucheService
  ) { }

  ngOnInit(): void {
  }

  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }

}
