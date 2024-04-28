import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, map, take } from 'rxjs';

@Component({
  selector: 'prueba',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.scss'
})
export class PruebaComponent implements OnInit {

  letras: string[] = []
  id = this.activatedRoute.snapshot.paramMap.get('id')
  texto = ''


  constructor(private activatedRoute: ActivatedRoute) {   }

  
  ngOnInit(): void {
    console.log(
      this.id
    )

    if(this.id==="1") {
      this.texto = 'Empezarás con tu prueba'
    }
    
    if(this.id==="2") {
      this.texto= "Selecciona la letra diferente"
      this.letras = this.generateLetterList('m', 'n')
    }

    if(this.id==="3") {
      this.texto= "Selecciona la letra diferente"
      this.letras = this.generateLetterList('e', 'a')
    }

    if(this.id==="4") {
      this.texto= "Selecciona la sílaba diferente"
      this.letras = this.generateLetterList('gra', 'gar')
    }
  }

  generateLetterList(letter: string, letter2: string): string[] {
    const letters = Array(25).fill(letter);
    const randomIndex = Math.floor(Math.random() * letters.length);
    letters[randomIndex] = letter2;

    return letters;
  }

  print(a: string) {
    window.alert(a)
  }
}