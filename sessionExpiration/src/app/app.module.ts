import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SessionExpirationAlert, SessionInterruptService } from 'session-expiration-alert';
import { AppSessionInterruptService } from './app-session-interrupt.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SessionExpirationAlert.forRoot({totalMinutes: 0.5}),
    
  ],
  providers: [
    {
      provide: SessionInterruptService,
     useClass: AppSessionInterruptService
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
