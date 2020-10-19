import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from './../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() selectPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selecteItem() {
    this.selectPersonne.emit(
      this.personne
    );
  }

}
