import { Component } from '@angular/core';
import {  Router  } from '@angular/router';
import { AuthService } from '../../auth.service'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.authenticate(this.username, this.password)) {
      // Si las credenciales son correctas, redirecciona al usuario al dasboard
      this.router.navigate(['/page/dasboard']);  
    } else {
      // Si las credenciales son incorrectas, muestra un mensaje de error
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }

}
