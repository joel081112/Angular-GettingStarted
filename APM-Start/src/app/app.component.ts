import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a href="" class="navbar-brand">{{ pageTitle }}</a>
      <ul class="nav nav-pills">
        <li><a href="" routerLink="/welcome" class="nav-link">Home</a></li>
        <li>
          <a href="" routerLink="/products" class="nav-link">Product List</a>
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  pageTitle: string = 'App to Get Started';
}
