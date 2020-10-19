import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor() { }

  ngOnInit(): void {
  }

}
