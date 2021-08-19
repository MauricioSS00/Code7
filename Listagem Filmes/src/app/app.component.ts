import { Component, OnInit } from '@angular/core';

import { Filme } from './filme.model';
import { FilmesListaService } from './filmes-lista.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  filmes: Filme[] = [];

  constructor(
    private filmeService: FilmesListaService
  ) { }

  ngOnInit(): void {
    this.buscarFilmes();
  }

  async buscarFilmes() {
    this.filmes = await this.filmeService.buscarFilmes();
  }
}
