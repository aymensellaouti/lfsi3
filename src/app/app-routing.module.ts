import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { CvComponent } from './cv/cv/cv.component';
import { DeletePersonneComponent } from './cv/delete-personne/delete-personne.component';
import { PersonneDetailsComponent } from './cv/personne-details/personne-details.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NF404Component } from './nf404/nf404.component';
import { TodoComponent } from './todo/component/todo/todo.component';
//cv/1
const routes: Routes = [
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  { path: 'todo', component: TodoComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddPersonneComponent, canActivate: [AuthGuard] },
      { path: ':id', component: PersonneDetailsComponent },
      { path: 'delete/:id', component: DeletePersonneComponent },
    ],
  },
  { path: '', component: CvComponent },
  { path: 'color/:couleur', component: ColorComponent },
  { path: 'login', component: LoginComponent },
  {path: '**', component: NF404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
