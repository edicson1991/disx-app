import { Routes } from '@angular/router';
 
// Importa tus componentes
import { LoginComponent } from './auth/login/login.component';
import { DasboardComponent } from './page/dasboard/dasboard.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HomeComponent } from './page/home/home.component';
import { authGuard } from './guard/auth.guard';
import { PruebaComponent } from './prueba/prueba.component';
import { Home2Component } from './page/home2/home2.component';


 
// Define tus rutas
const routes: Routes = [
    
    { path: 'auth/login', component: LoginComponent },
    { path: 'page/home2', component: Home2Component},

    {path: 'page', component: LayoutComponent, children:[
        { path: 'home', component: HomeComponent},
        {
            path: 'dasboard/:id', component: DasboardComponent, canActivate: [authGuard], 
            children: [
                { path: 'prueba', component: PruebaComponent, },   
            ]
        },
        { path: 'dasboard', component: DasboardComponent,canActivate:[authGuard],

        }, 

    ] },

    

    { path: '', redirectTo: 'page/home', pathMatch: 'full' },
    { path: '', redirectTo: 'page/home2', pathMatch: 'full' },
    
 
];
 
export { routes };
