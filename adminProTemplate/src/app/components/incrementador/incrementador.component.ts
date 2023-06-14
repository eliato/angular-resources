import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent {

  @Input() progreso: number = 40;

  @Output() nuevoValor = new EventEmitter<number>();

  get getProgreso(){
    return `${this.progreso}%`
  }

  cambiarValor(valor: number){

    if (this.progreso >= 100 && valor >=0) {
      this.nuevoValor.emit(100);
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.nuevoValor.emit(0);
      return this.progreso = 0;
    }

  this.progreso = this.progreso + valor;
  this.nuevoValor.emit( this.progreso );

  }

}
