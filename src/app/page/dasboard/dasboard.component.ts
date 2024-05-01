import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PruebaComponent } from "../../prueba/prueba.component";


@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, DasboardComponent, CommonModule, MatButtonModule, PruebaComponent,],
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.scss'
   
})



export class DasboardComponent  implements OnInit{

  id$ = this.activatedRoute.paramMap
  idNumber = 0

  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {   }


  ngOnInit(): void {
    this.id$.subscribe(console.log)
  }

  bajo_riesgo: boolean = false;
  alto_riesgo: boolean = true;

  testPrueba = 0;

  runPrueba (id: any) {
    console.log(id.get('id'))
    const param =  parseInt(id.get('id'))
    this.router.navigate([`/page/dasboard/${param+1}/prueba`]);

  }

  convert (id:any) {
    return parseInt(id.get('id'))
  }

  finalizarPrueba () {

  }
  
  answer() {
    
  }

}
