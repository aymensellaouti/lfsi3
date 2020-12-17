import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Personne } from '../model/personne';

const CV_API = 'https://immense-citadel-91115.herokuapp.com/api/personnes/';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[];

  //C'est une source de données
  // On peut s'inscrire pour recvoire les infos (Observable)
  // On peut broadcaster une nouvelle information (observer via la methode next)
  public selectItemSubject = new Subject<Personne>();
  constructor(private http: HttpClient) {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 38, 1234, 'teacher', 'as.jpg'),
      new Personne(
        2,
        'sellaouti2',
        'aymen2',
        25,
        4321,
        'teacher2',
        'rotating_card_profile2.png'
      ),
      new Personne(3, 'sellaouti2', 'aymen2', 43, 4321, 'teacher2', ''),
    ];
  }

  getFakePersonnes(): Personne[] {
    return this.personnes;
  }

  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(CV_API);
  }
  getFakePersonneById(id: number): Personne {
    return this.personnes.find((personne) => personne.id === id);
  }
  getPersonneById(id): Observable<Personne> {
    return this.http.get<Personne>(CV_API + id);
  }
  deletePersonne(personne: Personne): Observable<any> {
    const token = localStorage.getItem('token');
    const params = new HttpParams().set('access_token', token);
    return this.http.delete<any>(CV_API + personne.id, { params });
  }

  addPersonne(personne: Personne): Observable<Personne> {
    const token = localStorage.getItem('token');
    /*     const params = new HttpParams().set('access_token', token);
     */
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.post<Personne>(CV_API, personne, { headers });
  }

  // Broadcaster l'information de selection et envoyer la personne sélectionnée
  public selectPersonne(personne: Personne) {
    this.selectItemSubject.next(personne);
  }
}
