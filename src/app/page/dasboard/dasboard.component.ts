import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [RouterOutlet,RouterLink,HeaderComponent,DasboardComponent,CommonModule, MatButtonModule ],
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.scss'
})
export class DasboardComponent {

  public prueba = 0;

  siguiente () {
    this.prueba++ ;
  }
  
  bajo_riesgo: boolean = false;
  alto_riesgo: boolean = true;
  

}


