import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { NgModule } from '@angular/core';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RjxComponent } from './rjx/rjx.component';

const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      {
        path: '', component: DashboardComponent
      },
      {
        path: 'progress', component: ProgressComponent
      },
      {
        path: 'grafica1', component: Grafica1Component
      },
      {
        path: 'account-setting', component: AccountSettingComponent
      },
      {
        path: 'promesas', component: PromesasComponent
      },
      {
        path: 'rjx', component: RjxComponent
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {}
