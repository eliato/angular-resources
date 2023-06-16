import { Component,  } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {

  public labels1: string[] = ['Pan', 'queso', 'huevos'];
  public data1 = [
    4, 30,56
  ];

  public colores = ['#06d79c', '#141e54', '#0d6fff']



}
