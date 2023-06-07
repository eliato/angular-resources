import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs'

@Component({
  selector: 'app-search',
  template: ` 
  
  <div class="w-100 mt-4 mb-8">
      <div class="relative">
        <form onkeydown="return event.key != 'Enter';">
          <svg class="absolute top-0 mt-6 ml-6 w-8 h-8 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input class="text-3xl placeholder-gray-600 text-gray-800 pb-4 pt-5 pl-20 pr-4 rounded 
          w-full border-b-4 focus:outline-none focus:border-blue-800" type="search" placeholder="Search Term"
          [formControl]='inputSearch' >
          </form>
      </div>
  </div>
  
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputSearch = new FormControl('');
  @Output() submitted = new EventEmitter<string>();


  constructor() {    

  }

  ngOnInit(): void {
   
    this.onChange();
  }

  onChange(): void{
   
    this.inputSearch.valueChanges
    .pipe(
      map( (search: string) =>  search.trim()),
      debounceTime(500),
      distinctUntilChanged(),
      filter((search: string)=> search !== ''),
      tap((search: string) => this.submitted.emit(search))
    )
    .subscribe();
  }

}
