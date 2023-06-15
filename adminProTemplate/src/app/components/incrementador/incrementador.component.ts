import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {


  @Input() progreso: number = 40;
  @Input() btnClass: string = 'btn-primary'

  @Output() nuevoValor = new EventEmitter<number>();

  ngOnInit() {
   this.btnClass = `btn ${this.btnClass}`;
  }

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

  onChange( nueoValor: number){

    if (nueoValor >= 100) {
      this.progreso = 100;
    } else if( nueoValor <= 0) {
      this.progreso = 0;
    }else {
      this.progreso = nueoValor;
    }

    this.nuevoValor.emit( this.progreso );

  }

}
