import { Component, Input, OnInit } from '@angular/core';
import { ChartData,  } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {


  @Input() titulo: string = 'Sin Titulo';

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input('datas') data:any[] = [35,45,10];
  @Input('colores') colores: any[]=  ['#6857E6', '#009FEE', '#f02059'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.data,
        backgroundColor: this.colores },

    ]
  };

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.doughnutChartData={
      labels: this.doughnutChartLabels,
      datasets:[
        { data: this.data, backgroundColor: this.colores}
      ]

    }


  }
  //public doughnutChartType: ChartType = 'doughnut';

}
