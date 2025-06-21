import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RMApiService {
  baseUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(
    private http: HttpClient
  ) { }
  
  public getPeople()  
  {
    return this.http.get(`${this.baseUrl}/`);
  }
  public getPeopleById(id: number = 340)
  {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  
}
