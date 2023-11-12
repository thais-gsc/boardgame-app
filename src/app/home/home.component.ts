import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { BggApiService } from '../service/bgg-api.service';
import { Boardgame } from '../models/boardgame.model';
import { BuscaService } from '../service/busca.service';
import { FavoriteService } from '../service/favorite.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public boardgames: Boardgame[] = [];

  public buscaFoiFeita = false;
  public numeroDeResultados = 0;

  public subscriptions?: Subscription[] = []

  constructor(private api: BggApiService, private buscaService: BuscaService, private favoriteService: FavoriteService) {
  }

  ngOnInit(): void {
    this.subscriptions?.push(
      this.api.listAll().subscribe((boardgames: Array<Boardgame>) => {
        this.boardgames = boardgames;
      })
    );

    this.subscriptions?.push(
      this.buscaService.buscaObservable$.subscribe(termo => {
        this.buscaFoiFeita = termo !== '';
        this.subscriptions?.push(
          this.api.findGame(termo).subscribe(games => {
            this.boardgames = games;
            this.numeroDeResultados = games.length;
          })
        );
      })
    );
  }

  addFavorite(boardgame: Boardgame) {
    this.favoriteService.addFavorite(boardgame);
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach(subscription => subscription.unsubscribe());
  }

}
