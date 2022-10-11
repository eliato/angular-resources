import { Component, Input } from '@angular/core';
import { Article } from "../services/search.service";
@Component({
  selector: 'app-article',
  template: `
             <li class="w-full text-gray-700 p-4 mt-2 bg-white cursor-pointer hover:bg-gray-100" (click)="open()">
             <h4 class="text-blue-500">
             {{article.title}}
             </h4>          
              <p [innerHTML]="article.snippet"></p>
             </li>
                
              `,
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent  {
  @Input() article!: Article;
  constructor() { }

  open(){
    window.open(`https://es.wikipedia.org/?curid=${this.article.pageid}`)
  }

}
