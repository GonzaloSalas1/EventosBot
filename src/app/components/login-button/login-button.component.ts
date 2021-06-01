import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styles: [
  ]
})
export class LoginButtonComponent implements OnInit {

  usuarios: any[] = [];

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(data => {
      console.log(data);
    })
      fetch(`https://discord.com/api/v8/users/@me`, {
        headers: {
          Authorization: `Bearer 6xRsmccX2NWQ42dwYeZgGSMa4Kn5V4`
        }
      })
        .then(user => user.json())
        .then(user => console.log(user))
        .catch(err => console.log(err))
  }

  loginWithRedirect(): void{
    this.auth.loginWithRedirect();
  }
}
