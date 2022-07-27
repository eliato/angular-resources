import { Component } from '@angular/core';
import { Article, SearchService } from './pages/services/search.service';
import { Observable, tap } from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles$ !: Observable<Article[]>
  constructor(private readonly searchSvc: SearchService){
    
  }

  onSearch(term: string): void{
   //onsole.log(term)
    this.articles$ = this.searchSvc.search(term)
    
  }
}
