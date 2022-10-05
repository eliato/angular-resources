import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent 
  },
  {  
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard] 
  }

];

export const CoreRoutes = RouterModule.forChild(routes);
