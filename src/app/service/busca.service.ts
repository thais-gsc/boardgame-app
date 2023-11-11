import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {

  private buscaSubject = new Subject<string>();

  buscaObservable$ = this.buscaSubject.asObservable();

  buscar(termo: string) {
    this.buscaSubject.next(termo);
  }
}
