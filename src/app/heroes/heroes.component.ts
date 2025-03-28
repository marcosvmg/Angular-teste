import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  standalone: false
})

export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Hero[] = HEROES;
  selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}