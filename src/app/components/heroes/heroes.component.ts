import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];

  constructor(private _heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }
  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}

export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
