import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { info } from 'console';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe(
      (infos) => {
        //stocker l'info dans le localStorage
        localStorage.setItem('token', infos.id);
        // rediriger le user vers la page de la route cv
        this.router.navigate(['cv']);
      },
      (erreur) => console.log(erreur)
    );
  }
}
