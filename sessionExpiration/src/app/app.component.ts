import { Component } from '@angular/core';
import { SessionTimerService } from 'session-expiration-alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sessionExpiration';
  alertAt = 15;
  startTimer = true;

  constructor(public sessionTimer: SessionTimerService) {}
  increase() {
    this.alertAt++;
  }
  toggleTimer() {
    this.startTimer = !this.startTimer;
  }
}
