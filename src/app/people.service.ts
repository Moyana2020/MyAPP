import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface person{
  firstName : string ;
  lastName : string ;
  telephone : string ;
  id : number ;
}

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  constructor(private http : HttpClient) { }
  getPeople(): Observable<person>{
    return this.http.get<person>('https://localhost:44345/api/people')
  }
}
