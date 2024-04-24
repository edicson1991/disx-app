import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {HeaderComponent} from './shared/header/header.component'

import { BannerComponent } from './shared/banner/banner.component'
import { FooterComponent } from './shared/footer/footer.component';
import { DasboardComponent } from './page/dasboard/dasboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent, BannerComponent, DasboardComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'disx-app';
}
