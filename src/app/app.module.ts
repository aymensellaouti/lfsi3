import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { PremierComponent } from './premier/premier.component';
import { TestComponent } from './test/test.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { FilsComponent } from './components/fils/fils.component';
import { PereComponent } from './components/pere/pere.component';
import { PereColorComponent } from './components/pere-color/pere-color.component';
import { FilsColorComponent } from './components/fils-color/fils-color.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { CvComponent } from './cv/cv/cv.component';
import { CarteComponent } from './cv/carte/carte.component';
import { NgstyleExampleComponent } from './directives/ngstyle-example/ngstyle-example.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgclassExampleComponent } from './directives/ngclass-example/ngclass-example.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { TestngIFComponent } from './directives/testng-if/testng-if.component';
import { RandomPipePipe } from './pipes/random-pipe.pipe';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { TodoComponent } from './todo/component/todo/todo.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { PersonneDetailsComponent } from './cv/personne-details/personne-details.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { DeletePersonneComponent } from './cv/delete-personne/delete-personne.component';
import { NF404Component } from './nf404/nf404.component';
import { TestFormComponent } from './test-form/test-form.component';
import { ObservableComponent } from './components/observable/observable.component';
import { SliderComponent } from './components/slider/slider.component';
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PremierComponent,
    TestComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    FilsComponent,
    PereComponent,
    PereColorComponent,
    FilsColorComponent,
    CvComponent,
    ItemComponent,
    ListComponent,
    CarteComponent,
    NgstyleExampleComponent,
    MiniWordComponent,
    NgclassExampleComponent,
    HighlightDirective,
    RainbowDirective,
    TestngIFComponent,
    RandomPipePipe,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    LoginComponent,
    RouterSimulatorComponent,
    PersonneDetailsComponent,
    AddPersonneComponent,
    DeletePersonneComponent,
    NF404Component,
    TestFormComponent,
    ObservableComponent,
    SliderComponent,
    HttpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
