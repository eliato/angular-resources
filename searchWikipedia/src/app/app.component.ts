import { Component } from '@angular/core';
import { SearchService } from './pages/services/search.service';
import { tap } from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private readonly searchSvc: SearchService){
    this.searchSvc.search('el salvador')
    .pipe(
      tap(res => console.log(res))
    ).subscribe();
  }
}
