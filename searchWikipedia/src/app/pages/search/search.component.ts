import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  template: ` 
   
      <div class="relative">
        <input type="text" placeholder="Search Term" class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded" />
      </div>
    
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
