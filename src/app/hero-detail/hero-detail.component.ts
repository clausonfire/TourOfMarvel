import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero, Results } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
    heroes: Results[];


  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');//el + delante de la variable, la convierte en nr

    this.heroService.getIdHeroes(id).subscribe((heroes: Results[])=>this.heroes=heroes); 
  }

  // getHero(): void {
  //   const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  //   this.heroService.getHero(id)
  //     .subscribe(hero => this.hero = hero);
  // }

  goBack(): void {
    this.location.back();
  }

  
}
