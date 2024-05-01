import { ConteoService } from './../service/conteo.service';
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
  contador = 0
  compara = ''
  imagen = ''
 



  constructor(private activatedRoute: ActivatedRoute,
    public conteo: ConteoService
  ) {   }



  
  ngOnInit(): void {
    console.log(
      this.id
    )
    console.log(this.conteo.mostrarContador)
   
    

    if(this.id==="1") {
      this.texto = 'Es tiempo de comenzar tu prueba, sigue las siguientes instrucciones:'
      this.imagen = "../../assets/imagen_page/Previo_a_la_prueba.png"

      
    }
    
    if(this.id==="2") {
      this.texto= "Selecciona la letra diferente"
      this.letras = this.generateLetterList('m', 'n')
      this.compara = "n"
    }

    if(this.id==="3") {
      this.texto= "Selecciona la letra diferente"
      this.letras = this.generateLetterList('e', 'a')
      this.compara = "a"

    }

    if(this.id==="4") {
      this.texto= "Selecciona la sílaba diferente"
      this.letras = this.generateLetterList('gra', 'gar')
      this.compara = "gar"

    }

    if(this.id==="5") {
      this.imagen = "../../assets/imagen_disx/bajo_riesgo.png"
    }

    if(this.id==="6") {
      this.imagen = "../../assets/imagen_disx/riesgo_alto.png"
    }
  }

  generateLetterList(letter: string, letter2: string): string[] {
    const letters = Array(25).fill(letter);
    const randomIndex = Math.floor(Math.random() * letters.length);
    letters[randomIndex] = letter2;

    return letters;
  }

  print(letraEscogida: string) {
    if(this.compara === letraEscogida) {
      this.contador += 1
    }
    window.alert(letraEscogida)
  }


}