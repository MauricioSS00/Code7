import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filme } from './filme.model';

@Injectable({
  providedIn: 'root'
})
export class FilmesListaService {

  constructor(
    private http: HttpClient
  ) { }

  async buscarFilmes(): Promise<Filme[]> {
    return this.http.get<Filme[]>('./../assets/filmes.json').toPromise();
  }
}
