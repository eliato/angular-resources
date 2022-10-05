import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthConfig, OAuthModule, OAuthModuleConfig, OAuthStorage } from 'angular-oauth2-oidc';
import { authAppInitializerFactory } from '../core/auth/auth-app-initializer.factory';
import { AuthService } from '../services/auth.service';
import { authModuleConfig } from '../core/auth/auth-module-config';
import { authConfig } from './auth/auth-config';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../guards/auth-guard.service';
import { AuthGuardLogin } from '../guards/auth-guard-login.service';
// We need a factory since localStorage is not available at AOT build time
export function storageFactory(): OAuthStorage {
  return localStorage;
}

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: [    
    CommonModule,
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthGuardLogin
  ]
})
export class CoreModule { 

  static forRoot(): ModuleWithProviders<CoreModule> { 
    return {
      ngModule: CoreModule,
      providers: [
        { provide: APP_INITIALIZER, useFactory: authAppInitializerFactory, deps: [AuthService], multi: true },
      { provide: AuthConfig, useValue: authConfig },
      { provide: OAuthModuleConfig, useValue: authModuleConfig },
      { provide: OAuthStorage, useFactory: storageFactory },
      ]
    }
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
