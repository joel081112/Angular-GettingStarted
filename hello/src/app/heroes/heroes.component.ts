import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  template: `
    <p>
      heroes works! this is our heroes.
    </p>
  `,
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //put code for startup
  }

}
