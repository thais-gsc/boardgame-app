import { Component } from '@angular/core';
import { Boardgame } from '../models/boardgame.model';
import { FavoriteService } from '../service/favorite.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  get favoritos() {
    return this.favoriteService.favoritos;
  }

  constructor(private favoriteService: FavoriteService) {}

  public removeFavorite(boardgame: Boardgame) {
    const index = this.favoritos.findIndex(favorito => favorito.id === boardgame.id);
    if (index !== -1) {
      this.favoritos.splice(index, 1);
    }
  }
}
