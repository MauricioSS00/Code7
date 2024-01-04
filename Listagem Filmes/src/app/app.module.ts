import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DadosFilmeComponent } from './dados-filme/dados-filme.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DadosFilmeComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
