import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConteoService {

  private contador = new BehaviorSubject<number>(0);
  constructor() { }
  public sumar(n:number){
    this.contador.next(n);
  }; // Emite el nuevo valor del contador 
   
  
  public mostrarContador(): Observable<number> {
    console.log('estoy desde el servicio')
    return this.contador
  }

}
