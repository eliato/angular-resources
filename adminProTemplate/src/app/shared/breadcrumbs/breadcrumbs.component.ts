import { Component } from '@angular/core';
import {  ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {

  title!:string;
  constructor(private router: Router){
   this.getTitleRoute();
  }

  getTitleRoute(){
    this.router.events
    .pipe(
      filter<any>(event => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null),
      map((event:ActivationEnd) => event.snapshot.data)

    )
    .subscribe(
     ({titulo}) =>{
      this.title = titulo;
      document.title = `AdminPro - ${this.title}`
     }
    )
  }

}
