import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [BannerComponent,  RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.scss'
})
export class Home2Component {

}
