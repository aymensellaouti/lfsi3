import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  throttleTime,
} from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  constructor() {}
  ofObservable = interval(1000).pipe(throttleTime(3000));
  ngOnInit(): void {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe((val) => {
      console.log(val);
    });

    observable
      .pipe(
        map((value) => {
          if (value % 2) return value * 2;
          else return value * 3;
        }),
        filter((valeur) => !(valeur % 3)),
        distinctUntilChanged()
      )
      .subscribe(
        (data) => {
          console.log(`Je suis inscrit et j'ai recu la valeur : ${data}`);
        },
        (error) => {
          console.log('Il y a un pbm voici l erreur', error);
        },
        () => {
          console.log('Il n y a plus de données je suis malheureux');
        }
      );
  }
}
