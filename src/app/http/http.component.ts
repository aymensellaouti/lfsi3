import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { info } from 'console';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://restcountries.eu/rest/v2/all')
      .pipe(
        map((countries) => {
          return countries.filter((country) => country.region === 'Africa');
        })
      )
      .subscribe((infos) => {
        console.log(infos);
      });
  }
}
