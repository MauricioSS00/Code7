import { TestBed } from '@angular/core/testing';

import { FilmesListaService } from './filmes-lista.service';

describe('FilmesListaService', () => {
  let service: FilmesListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmesListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
