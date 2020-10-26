import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { CvComponent } from './cv/cv/cv.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
