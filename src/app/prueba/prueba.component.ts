import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, map, switchMap, take } from 'rxjs';
import { ConteoService } from '../service/conteo.service';


@Component({
  selector: 'prueba',
  standalone: true,
  imports: [CommonModule],
  providers: [ConteoService],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.scss'
})
export class PruebaComponent implements OnInit {

  letras: string[] = []
  id$ = this.activatedRoute.paramMap
  texto = ''
  contador = 0
  compara = ''
  imagen = ''
 



  constructor(
    private activatedRoute: ActivatedRoute,
    private conteo: ConteoService
  
  ) {   }



  
  ngOnInit(): void {    
   this.id$.pipe(
    switchMap((id) => {
      const paramId = id?.get('id')
      if (paramId === '2') {
        this.compara = 'n'; 
        return this.generateLetterList('m', 'n'); // Llamar con parámetros específicos
      } else if (paramId ==='3') {
        this.compara = 'a'; 
        return this.generateLetterList('e','a'); // Llamar con parámetros por defecto
      } else if (paramId ==='4') {
        this.compara = 'gar'; 
        return this.generateLetterList('gra','gar'); // Llamar con parámetros por defecto
      } 
      else {
        return this.answer()
      }
    })
  ).subscribe((letras: any) => {
   
  });
  
  }

  generateLetterList(letter: string, letter2: string): string[] {
    console.log('lista')
    const letters = Array(25).fill(letter);
    const randomIndex = Math.floor(Math.random() * letters.length);
    letters[randomIndex] = letter2;
    this.letras = letters
    return letters;
  }



  print(letraEscogida: string) {
    if(this.compara != letraEscogida) {
      this.contador += 1
    }
    window.alert(`Seleccionaste ${letraEscogida} continúa la prueba`)

  }

  answer() {
    return 'a'
  }


}