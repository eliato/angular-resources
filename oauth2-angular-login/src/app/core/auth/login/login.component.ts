import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  constructor(private authService: AuthService) {
    this.isAuthenticated$ = authService.isAuthenticated$;
  }


  ngOnInit() {

    this.isAuthenticated$
    .subscribe({
      next: (data) => {
        if(data){
          this.authService.returnHome();
        }
      }
    })
  }

  login() {
    this.authService.login();
   }
     logout() {
    this.authService.logout();
   }
   
   get email(): string {
    return this.authService.identityClaims
    ? (this.authService.identityClaims as any)['email']
    : '-';
  }


}
