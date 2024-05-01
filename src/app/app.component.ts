import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {HeaderComponent} from './shared/header/header.component'
import { BannerComponent } from './shared/banner/banner.component'
import { FooterComponent } from './shared/footer/footer.component';
import { DasboardComponent } from './page/dasboard/dasboard.component';
import { FormsModule } from '@angular/forms';
import { PruebaComponent } from './prueba/prueba.component';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent, BannerComponent, DasboardComponent, FormsModule, PruebaComponent, MatButtonModule],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.scss'
  
})
export class AppComponent {
  title = 'disx-app';
}

