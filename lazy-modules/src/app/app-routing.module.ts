import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './core/mantenimientos/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: 'mantenimientos',
   //component: UsuariosComponent
      loadChildren: ()=>  import('./core/mantenimientos/usuarios/usuarios.module').then
     (m => m.UsuariosModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
