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
        path: '', component: DashboardComponent, data: { titulo: 'Dashboar'}
      },
      {
        path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBAr'}
      },
      {
        path: 'grafica1', component: Grafica1Component, data: { titulo: 'Grafica 1'}
      },
      {
        path: 'account-setting', component: AccountSettingComponent, data: { titulo: 'Setting'}
      },
      {
        path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'}
      },
      {
        path: 'rjx', component: RjxComponent, data: { titulo: 'Rjx'}
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {}
