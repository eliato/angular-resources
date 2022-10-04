import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionInterruptService } from 'session-expiration-alert';

@Injectable({
  providedIn: 'root'
})
export class AppSessionInterruptService extends SessionInterruptService{
  constructor(private readonly httpClient: HttpClient) {
    super();
  }
  override continueSession() {
    console.log(`I issue an API request to server.`);
  }
  override stopSession() {
    console.log(`I logout.`);
  }
}
