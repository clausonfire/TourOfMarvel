import { Component, OnInit } from '@angular/core';

// import { Hero, Results } from '../hero';
import { HeroService } from '../hero.service';
import { Observable, of } from 'rxjs';
import { Hero, Results } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Results[];
  offset: number = 0;
  // public allHeroes: Observable<Hero[]> = of([]);

  constructor(private heroService: HeroService) { }

  // allHeroes: Observable<Hero[]> | undefined;


  ngOnInit(): void {
    this.heroService.getAllHeros(this.offset).subscribe((heroes: Results[])=>this.heroes=heroes);
  }

  // getHeroes(): void {
  //   // this.heroService.getHeroes()
  //   // .subscribe(heroes => this.heroes = heroes);

  //   // this.allHeroes = this.heroService.getAllHeros();
  // }

  atras(): void {
    if (this.offset >= 20) {
      this.offset = this.offset - 20;
      this.heroService.getAllHeros(this.offset).subscribe((heroes: Results[])=>this.heroes=heroes);
    }
  }

  siguiente(): void {
    this.offset = this.offset + 20;
    this.heroService.getAllHeros(this.offset).subscribe((heroes: Results[])=>this.heroes=heroes);
  }
}
