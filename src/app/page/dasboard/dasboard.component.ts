import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from "../../prueba/prueba.component";

@Component({
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
export class DasboardComponent  implements OnInit{

  
  constructor(private activatedRoute: ActivatedRoute) {   }


  ngOnInit(): void {
  
  }

}
