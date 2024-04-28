import { Routes } from '@angular/router';
 
// Importa tus componentes
import { LoginComponent } from './auth/login/login.component';
import { DasboardComponent } from './page/dasboard/dasboard.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HomeComponent } from './page/home/home.component';
import { authGuard } from './guard/auth.guard';
import { PruebaComponent } from './prueba/prueba.component';


 
// Define tus rutas
const routes: Routes = [
    
    { path: 'auth/login', component: LoginComponent },
    { path: 'page', component: LayoutComponent, children:[
        { path: 'home', component: HomeComponent},
        {
            path: 'dasboard/:id', component: DasboardComponent, children: [
                { path: 'prueba', component: PruebaComponent },   
            ]
        },
        { path: 'dasboard', component: DasboardComponent,canActivate:[
            authGuard
        ] }
    ] },
 
    { path: '', redirectTo: 'page/home', pathMatch: 'full' },
 
];
 
export { routes };
