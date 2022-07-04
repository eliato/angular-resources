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
    
  }

  onSearch(term: string): void{
    this.searchSvc.search(term)
    .pipe(
      tap(res => console.log(res))
    ).subscribe();
  }
}
