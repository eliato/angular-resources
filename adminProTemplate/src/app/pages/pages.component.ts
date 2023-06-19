import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {


  public urlTheme = document.querySelector('#theme');

  ngOnInit() {

   const themeLocal = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css' ;

   this.urlTheme?.setAttribute('href', themeLocal);

  }

  year = new Date().getFullYear();


}
