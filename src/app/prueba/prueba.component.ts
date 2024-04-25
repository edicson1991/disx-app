import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'prueba',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.scss'
})
export class PruebaComponent implements OnInit {

  letras: string[] = []

  constructor(private activatedRoute: ActivatedRoute) { 
    const id: Observable<string> = activatedRoute.params.pipe(map((p) => p['id'])); 
    id.subscribe((idVal) => { 
      console.log(idVal) 
    }) 
  }



  ngOnInit(): void {
    this.letras = this.generateLetterList('m', 'n')
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