import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TestHttpService {
  constructor(private http: HttpClient) {}
  getData(): Observable<any[]> {
    return this.http.get<any[]>('https://restcountries.eu/rest/v2/all').pipe(
      map((countries) => {
        return countries.filter((country) => country.region === 'Africa');
      })
    );
  }
}
