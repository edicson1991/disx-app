import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DasboardComponent } from './page/dasboard/dasboard.component';
import { BannerComponent } from './shared/banner/banner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';



export const routes: Routes = [

    { path: 'auth/login' , component: LoginComponent},
    { path: 'page/dasboard' , component: DasboardComponent},
    { path: 'shared/banner' , component: BannerComponent},
    { path: 'shared/footer' , component: FooterComponent},
    { path: 'shared/header' , component: HeaderComponent},

];

