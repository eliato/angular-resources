import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingComponent implements OnInit {

  public urlTheme = document.querySelector('#theme');

  public links!: NodeListOf<Element>;

  ngOnInit() {
    this.links = document.querySelectorAll('.selector');
    this.checkCurrentTheme();
  }


  changeTheme( theme: string ){


    const url = `./assets/css/colors/${theme}.css`;

    this.urlTheme?.setAttribute('href', url);

    localStorage.setItem('theme', url);

    this.checkCurrentTheme();

  }

  checkCurrentTheme(){

    this.links.forEach( elem => {

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
