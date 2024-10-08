//Imports do Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

//Imports do projeto
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';

//Imports Json
import agenda from './agenda.json';


interface Contato{
  id: number
  nome: string
  telefone: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      CommonModule, 
      RouterOutlet, 
      ContainerComponent, 
      CabecalhoComponent,
      SeparadorComponent,
      ContatoComponent,
      FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;

  filtroPorTexto: string = '';

  filtrarContatosPorTexto(): Contato[]{
    if(!this.filtroPorTexto){
      return this.contatos;
    }
    return this.contatos.filter(contato => {
      return this.removerAcentos(contato.nome)
              .toLocaleLowerCase()
              .includes(
                this.removerAcentos(this.filtroPorTexto).toLowerCase()
              )
    })
  }

  filtrarContatosPorLetraInicial(letra: string) : Contato[]{
    return this.filtrarContatosPorTexto().filter(contato => {
      //Compara a letra inicial sem considerar acentuações
      return this.removerAcentos(contato.nome).toLowerCase().startsWith(letra)
    });
  }

  //Removendo os acentos das palavras
  private removerAcentos(texto: string) : string{
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  }
}
