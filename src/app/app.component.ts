import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {HeaderComponent} from './shared/header/header.component'
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent ],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'disx-app';
}
