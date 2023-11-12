import { Injectable } from '@angular/core';
import { Boardgame } from '../models/boardgame.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favoritos: Boardgame[] = [];

  addFavorite(boardgame: Boardgame) {
    if (!this.favoritos.some(favorito => favorito.id === boardgame.id)) {
      this.favoritos.push(boardgame);
    }
  }
}
