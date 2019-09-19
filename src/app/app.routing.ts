//Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//Importar componentes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddCarteleraComponent } from './components/add-cartelera/add-cartelera.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { DeleteCarteleraComponent } from './components/delete-cartelera/delete-cartelera.component';
import { MovieDetalleComponent } from './components/movie-detalle/movie-detalle.component';
import { RegistroComponent } from './components/registro/registro.component';
import { Page404Component } from './components/page404/page404.component';

//Importar guards
import {AuthGuard} from './guards/auth.guard';
import {LogoutGuard} from './guards/logout.guard';

//Array de rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login',component: LoginComponent, canActivate: [LogoutGuard]},//Solo si no esta logueado
  { path: 'add-cartelera',component: AddCarteleraComponent, canActivate: [AuthGuard]},//Solo usuarios autenticados
  { path: 'create-movie',component: CreateMovieComponent, canActivate: [AuthGuard]},//Solo usuarios autenticados
  { path: 'delete-cartelera',component: DeleteCarteleraComponent, canActivate: [AuthGuard]},//Solo usuarios autenticados
  { path: 'movie-detalle/:id',component: MovieDetalleComponent},
  { path: 'registro',component: RegistroComponent},
  {path: '**',component: Page404Component}
];

//Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
