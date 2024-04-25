import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,} from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,RouterLink, FormsModule],
  templateUrl:'./login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  login(): void {
    if (this.authService.authenticate(this.username, this.password)) {
     

      // Si las credenciales son correctas, redirecciona al usuario a la página de inicio
      // Aquí puedes usar Angular Router para navegar a la página de inicio
    } else {
      // Si las credenciales son incorrectas, muestra un mensaje de error
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }

}
