import { Output, EventEmitter, Component, OnInit } from '@angular/core';
import { Livro } from '../livros.model';
@Component({
  selector: 'app-inserir-livros',
  templateUrl: './inserir-livros.component.html',
  styleUrls: ['./inserir-livros.component.css']
})
export class InserirLivrosComponent {

  @Output() livroAdicionado = new EventEmitter<Livro>();

  id: string;
  titulo: string;
  autor: string;
  numeroPaginas: string;

  onAdicionarLivro() {

    const livro: Livro = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      numeroPaginas: this.numeroPaginas
    }

    this.livroAdicionado.emit(livro);

    this.id = '';
    this.titulo = '';
    this.autor = '';
    this.numeroPaginas = '';

  }

}
