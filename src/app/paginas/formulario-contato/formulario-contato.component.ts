import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "../../componentes/container/container.component";
import { SeparadorComponent } from "../../componentes/separador/separador.component";

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule
],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {

  contatoForm: FormGroup;

  constructor(){
    this.contatoForm = new FormGroup({
      nome: new FormControl('Jorge'),
      telefone: new FormControl('99 99999-999'),
      email: new FormControl('amaro@mail.com'),
      aniversario: new FormControl(),
      redes: new FormControl('linkedin.com/amarojc'),
      observacoes: new FormControl('Olá mundo!'),
    })
  }

  salvarContato(){
    console.log(this.contatoForm.value);
  }

  cancelar(){
    console.log('Submissão cancelada!');
  }
}
