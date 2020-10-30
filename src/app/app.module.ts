import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarLivrosComponent } from './livros/listar-livros/listar-livros.component';
import { InserirLivrosComponent } from './livros/inserir-livros/inserir-livros.component';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { LivroService } from './livros/livros.service';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ListarLivrosComponent,
    InserirLivrosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
