import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes = Hero[];
  title: string = 'webinar';
  selectedHero: any;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    //put code for startup
    this.heroes = this.heroService.getHeroes();
  }

  ok(hero: any){
    this.selectedHero = hero;
    console.log(this.selectedHero.name);
  }
}
