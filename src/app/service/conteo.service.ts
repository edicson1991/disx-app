import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConteoService {

  private contador = 0;
  constructor() { }
  public sumar(): void { 
    this.contador += 1; // Emite el nuevo valor del contador 
   
  }
  mostrarContador(): number {
    console.log('estoy desde el servicio')
    return this.contador
  }

}
