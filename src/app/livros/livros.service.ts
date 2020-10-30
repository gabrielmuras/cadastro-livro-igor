import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Livro } from './livros.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor() { }
  private listaLivrosAtualizada = new Subject<Livro[]>();

  private livros: Livro [] = [
    {
      id: '9999999',
      titulo: 'O Senhor dos Anéis',
      autor: 'J.R.R Tolkien',
      numeroPaginas: 'Todas'
    }
  ];

  getLivros(): Livro[] {
    return [...this.livros];
  }

  adicionarLivro (id: string, titulo: string, autor: string, numeroPaginas: string): void{
    const livro: Livro = {
      id: id,
      titulo: titulo,
      autor: autor,
      numeroPaginas:numeroPaginas
    };
    this.livros.push(livro);
    this.listaLivrosAtualizada.next([...this.livros]);
  }

    getListaDeLivrosAtualizadaObservable() {
      return this.listaLivrosAtualizada.asObservable();
    }
}
