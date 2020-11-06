//import { Output, EventEmitter, Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LivroService } from '../livros.service';

@Component({
  selector: 'app-inserir-livros',
  templateUrl: './inserir-livros.component.html',
  styleUrls: ['./inserir-livros.component.css']
})
export class InserirLivrosComponent {

  constructor (public livroService: LivroService) {

  }

  onAdicionarLivro(form: NgForm) {
    if (form.invalid) return;
    this.livroService.adicionarLivro(
      form.value.id,
      form.value.titulo,
      form.value.autor,
      form.value.paginas
    );
    form.resetForm();
  }

}
