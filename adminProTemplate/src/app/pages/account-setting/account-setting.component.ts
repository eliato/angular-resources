import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingComponent implements OnInit {

  constructor( private srvSetting: SettingService){}

  ngOnInit() {
    this.srvSetting.checkCurrentTheme();
  }


  changeTheme( theme: string ){

    this.srvSetting.changeTheme(theme);

  }




}
