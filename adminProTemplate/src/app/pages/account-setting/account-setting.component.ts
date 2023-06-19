import { Component } from '@angular/core';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingComponent {

  public urlTheme = document.querySelector('#theme');

  changeTheme( theme: string ){


    const url = `./assets/css/colors/${theme}.css`;

    this.urlTheme?.setAttribute('href', url);

    localStorage.setItem('theme', url);

  }



}
