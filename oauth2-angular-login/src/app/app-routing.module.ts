import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreRoutes } from './core/core.routing';

const routes: Routes = [
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CoreRoutes
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
