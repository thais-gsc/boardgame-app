import { Component, OnInit } from '@angular/core';
import { BggApiService } from './service/bgg-api.service';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { BuscaService } from './service/busca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'boardgame-app';

  public termoBusca: string = '';
  public faMagnifyingGlass = faMagnifyingGlass
  public faBars = faBars


  constructor(private api: BggApiService, private buscaService: BuscaService, private router: Router) { }

  ngOnInit(): void {
    this.api.listAll();
  }

  public buscar(): void {
    this.buscaService.buscar(this.termoBusca);
  }

  public isLoginPage(): boolean {
    return this.router.url === '/';
  }
}
