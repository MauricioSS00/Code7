import { Component, Input, OnInit } from '@angular/core';
import { Filme } from '../filme.model';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.component.html',
  styleUrls: ['./dados-filme.component.scss']
})
export class DadosFilmeComponent implements OnInit {

  @Input() filme!: Filme;

  constructor() { }

  ngOnInit(): void {
  }

}
