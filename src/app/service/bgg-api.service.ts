import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { Boardgame } from '../models/boardgame.model';
import * as convert from 'xml-js';

@Injectable({
  providedIn: 'root'
})
export class BggApiService {

  constructor(private http: HttpClient) {
  }

  public getAllGames(): Observable<Array<Boardgame>> {
    return this.http.get<Array<Boardgame>>(`${API_PATH}`)
  }

  public getGameById(id: string): Observable<Array<Boardgame>> {
    return this.http.get<Array<Boardgame>>(`${API_PATH}/${id}`)
  }

  public listAll(): Observable<Array<Boardgame>> {
    return this.getAllGames();
  }

  public findGame(name: string): Observable<Array<Boardgame>> {
    return this.getAllGames().pipe(
      map(games => games.filter(game => game.name.toLowerCase().includes(name.toLowerCase())))
    );
  }
}