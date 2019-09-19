import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {routing, appRoutingProviders} from './app.routing';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { AddCarteleraComponent } from './components/add-cartelera/add-cartelera.component';
import { DeleteCarteleraComponent } from './components/delete-cartelera/delete-cartelera.component';
import { MovieDetalleComponent } from './components/movie-detalle/movie-detalle.component';
import { Page404Component } from './components/page404/page404.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    CreateMovieComponent,
    AddCarteleraComponent,
    DeleteCarteleraComponent,
    MovieDetalleComponent,
    Page404Component,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
