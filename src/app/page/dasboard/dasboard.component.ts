import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from "../../prueba/prueba.component";

@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [RouterOutlet,RouterLink,HeaderComponent,DasboardComponent,CommonModule, MatButtonModule ],
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.scss'
    selector: 'app-dasboard',
    standalone: true,
    templateUrl: './dasboard.component.html',
    styleUrl: './dasboard.component.scss',
    imports: [
        RouterOutlet,
        RouterLink,
        HeaderComponent,
        DasboardComponent,
        CommonModule,
        PruebaComponent
    ]
})
export class DasboardComponent {
  bajo_riesgo: boolean = false;
  alto_riesgo: boolean = true;

  testPrueba = 0;

  runPrueba () {
    this.testPrueba++ ;

  }

  pruebaActiva () {

  }

  finalizarPrueba () {
    
  }
  

  

}


export class DasboardComponent  implements OnInit{

  
  constructor(private activatedRoute: ActivatedRoute) {   }


  ngOnInit(): void {
  
  }

}
