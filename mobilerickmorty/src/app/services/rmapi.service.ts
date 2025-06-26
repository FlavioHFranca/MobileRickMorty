import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RMApiService {
  baseUrl = 'https://rickandmortyapi.com/api';

  constructor(
    private http: HttpClient
  ) { }

  // public getPeople()  {
  //   return this.http.get(`${this.baseUrl}/`);
  // }
  getCharacters(): Observable<any> {
    return this.http.get(`${this.baseUrl}/character`);
  }
  public getPeopleById(id: number = Math.floor(Math.random() * 1000) ){
    return this.http.get(`${this.baseUrl}/character/${id}`);
  }

  
}
