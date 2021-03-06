

import {Component} from "@angular/core";
import {HeroService} from "./hero.service";


@Component({
  selector: 'my-app',
  template: `
   <h1>{{title}}</h1>
   <a routerLink = "/heroes">Heroes</a>
   <a routerLink = "/dashboard">Dashboard</a>
   <router-outlet></router-outlet>
  `,

})
export class AppComponent{
  title = 'Tour of Heroes';
}
