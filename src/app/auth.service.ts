import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedFlag: boolean = false;
  private readonly username = 'usuario';
  private readonly password = 'contraseña';

  authenticate(username: string, password: string): boolean {
    this.isAuthenticatedFlag = (username === this.username && password === this.password);
    return this.isAuthenticatedFlag;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedFlag;
  }
}
