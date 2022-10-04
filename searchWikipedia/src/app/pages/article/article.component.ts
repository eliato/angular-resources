import { Component, Input } from '@angular/core';
import { Article } from "../services/search.service";
@Component({
  selector: 'app-article',
  template: `
             <li class="w-full text-gray-700 p-4 mt-2 bg-white cursor-pointer hover:bg-gray-100">
              <a [href]="'https://es.wikipedia.org/?curid='+ article.pageid" target="_blank" class="text-blue-600" >
                {{article.title}}
              </a>
              <p [innerHTML]="article.snippet"></p>
             </li>
                
              `,
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent  {
  @Input() article!: Article;
  constructor() { }


}
