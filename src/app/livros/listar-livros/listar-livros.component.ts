import { Component, OnInit, OnDestroy } from '@angular/core';
import { Livro} from '../livros.model';
import { LivroService } from '../livros.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit, OnDestroy {

  livros: Livro[] = [];
  private livrosSubscription: Subscription;

  constructor(public livroService: LivroService) { }

  ngOnInit(): void {
    this.livroService.getLivros();
    this.livrosSubscription = this.livroService
    .getListaDeLivrosAtualizadaObservable()
    .subscribe((livros: Livro[]) => {
      this.livros = livros;
    });
  }

  ngOnDestroy(): void {
      this.livrosSubscription.unsubscribe();
  }

}
