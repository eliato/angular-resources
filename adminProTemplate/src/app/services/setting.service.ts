import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  public urlTheme = document.querySelector('#theme');

  constructor() {

   const themeLocal = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
   this.urlTheme?.setAttribute('href', themeLocal);

   }

   changeTheme( theme: string ){

    const url = `./assets/css/colors/${theme}.css`;
    this.urlTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();

  }

  checkCurrentTheme(){

    const links = document.querySelectorAll('.selector');
    links.forEach( elem => {

    elem.classList.remove('working');
    const btnTheme = elem.getAttribute('data-theme');
    const btnThemeURl = `./assets/css/colors/${btnTheme}.css`;
    const currentTheme = this.urlTheme?.getAttribute('href');

    if (btnThemeURl === currentTheme) {
      elem.classList.add('working');
    }



  }

  )

}


}
