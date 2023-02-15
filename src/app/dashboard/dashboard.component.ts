import { Component, OnInit } from '@angular/core';
import { Hero, Results } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes: Results[];
  // public allHeroes: Observable<Hero[]> = of([]);

  constructor(private heroService: HeroService) { }

  // allHeroes: Observable<Hero[]> | undefined;


  ngOnInit(): void {
    this.heroService.getRandomHeroes(12).subscribe((heroes: Results[])=>this.heroes=heroes);
  }
  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  // }
}
