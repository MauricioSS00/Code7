import { Component, OnInit } from '@angular/core';
import { Filme } from './filme.model';
import { FilmesListaService } from './filmes-lista.service';

@Component({
  selector: 'app-filmes-lista',
  templateUrl: './filmes-lista.component.html',
  styleUrls: ['./filmes-lista.component.sass']
})
export class FilmesListaComponent implements OnInit {

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
