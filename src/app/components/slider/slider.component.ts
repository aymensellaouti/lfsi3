import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  path = 'as.jpg';
  paths = [
    'as.jpg',
    'cv.png',
    '404.png',
    'tim_logo.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  imageObservable: Observable<string> = null;
  constructor() {}

  ngOnInit(): void {
    this.imageObservable = new Observable((observer) => {
      let i = 0;
      setInterval(() => {
        if (i === this.paths.length) {
          i = 0;
        }
        observer.next(this.paths[i++]);
      }, 1000);
    });
    this.imageObservable.subscribe((imagePath) => {
      console.log(imagePath);
      this.path = imagePath;
    });
  }
}
