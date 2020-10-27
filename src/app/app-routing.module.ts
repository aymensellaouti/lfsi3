import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { CvComponent } from './cv/cv/cv.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/component/todo/todo.component';


const routes: Routes = [
  {path: 'todo', component: TodoComponent},
  {path: 'cv', component: CvComponent},
  {path: '', component: CvComponent},
  {path: 'color', component: ColorComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
