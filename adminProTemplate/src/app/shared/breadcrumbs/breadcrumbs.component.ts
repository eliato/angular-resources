import { Component, OnDestroy } from '@angular/core';
import {  ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy {

  title!:string;
  titleSubscribe$!: Subscription;

  constructor(private router: Router){
  this.titleSubscribe$ = this.getTitleRoute().subscribe(
    ({titulo}) =>{
     this.title = titulo;
     document.title = `AdminPro - ${this.title}`
    }
   )
  }


  ngOnDestroy(): void {
    this.titleSubscribe$.unsubscribe();
  }

  getTitleRoute(){
  return this.router.events
    .pipe(
      filter<any>(event => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null),
      map((event:ActivationEnd) => event.snapshot.data)

    )
  }

}
