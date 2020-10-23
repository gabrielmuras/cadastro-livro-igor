import { Component, OnInit, Input } from '@angular/core';
import { Livro} from '../livros.model';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {

  @Input() livros: Livro[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
