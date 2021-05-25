import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  

  constructor(private http: HttpClient) { }
  
  getHeroes(): any {
    return this.http.get<Hero[]>('./api/heroes');
  }
}
