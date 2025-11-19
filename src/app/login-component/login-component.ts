import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../material/material-module';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login-service';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-login-component',
  imports: [
    FormsModule,
    MatCardModule,
    MaterialModule,
    RouterLink
  ],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  login(){
    this.loginService.login(this.username, this.password).subscribe(data => {
      // console.log('Login successful', data);
      sessionStorage.setItem(environment.TOKEN_NAME, data.access_token);

      this.router.navigate(['/pages/dashboard']);
    });
  }
}
