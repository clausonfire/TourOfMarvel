import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero, Results } from './hero';


@Injectable({ providedIn: 'root' })
export class HeroService {

  private heroesUrl = 'https://gateway.marvel.com/v1/public/characters';  // URL to web api
  private alcachofa = '?ts=alcachofa&apikey=564deb677da1743d1cb51f8563a23135&hash=3c2d4321ad9ef6ccaf1c4cfa1504acb9'
  private alcachofa2 = '&ts=alcachofa&apikey=564deb677da1743d1cb51f8563a23135&hash=3c2d4321ad9ef6ccaf1c4cfa1504acb9'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllHeros(offset: number): Observable<Results[]> {
    return this.http.get<Hero>(this.heroesUrl + this.alcachofa + "&offset=" + offset)
      .pipe(map((result: Hero) => result.data.results))
  }

  getRandomHeroes(limit: number): Observable<Results[]> {
    return this.http.get<Hero>(this.heroesUrl + this.alcachofa + "&offset=" + Math.floor(Math.random() * 1562) + '&limit=' + limit)
      .pipe(map((result: Hero) => result.data.results))
  }

  getIdHeroes(id:number): Observable<Results[]> {
    return this.http.get<Hero>(this.heroesUrl  + "/" + id + this.alcachofa) 
      .pipe(map((result: Hero) => result.data.results))
  }
 
  //"&nameStartsWith=' + ${text} +

  getSearchHeroes(text: string): Observable<Results[]> {
    return this.http.get<Hero>(this.heroesUrl + "?nameStartsWith=" + text  + this.alcachofa2 )
      .pipe(map((result: Hero) => result.data.results))
  }

  /** GET heroes from the server */
  // getHeroes(): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl)
  //     .pipe(
  //       tap(_ => this.log('fetched heroes')),
  //       catchError(this.handleError<Hero[]>('getHeroes', []))
  //     );
  // }



  // /** GET hero by id. Will 404 if id not found */
  // getHero(id: number): Observable<Hero> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.get<Hero>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Hero>(`getHero id=${id}`))
  //   );
  // }

  // /* GET heroes whose name contains search term */
  // searchHeroes(term: string): Observable<Hero[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
  //     tap(x => x.length ?
  //        this.log(`found heroes matching "${term}"`) :
  //        this.log(`no heroes matching "${term}"`)),
  //     catchError(this.handleError<Hero[]>('searchHeroes', []))
  //   );
  // }




}
