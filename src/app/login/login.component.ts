import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = '';
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.username === 'root' && this.password === 'root') {
      this.router.navigate(['color']);
    } else {
      this.errorMessage = 'Veuillez vérifier votre login et votre mot de passe';
    }
    /*
      Si le login et le mot de passe = root c'est ok je veux l'envoyer vers le composant
      Color
      Sinon j'affiche un message d'erreur
    */
  }
}
