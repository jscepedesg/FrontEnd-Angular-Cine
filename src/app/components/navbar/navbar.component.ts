import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [LoginService]
})
export class NavbarComponent implements OnInit {

  public app_retirarCartelera= "Eliminar Pelicula de Cartelera";
  public app_agregarCartelera= "Agregar Pelicula a Cartelera";
  public app_name = "PELICULAS";
  public app_crearPelicula= "Crear Pelicula";
  public app_login = "Login";
  public app_logout = "Logout";

  constructor(private _LoginService: LoginService)
  {

  }

  ngOnInit() {
  }

  onLogout(): void
  {
    this._LoginService.logoutUser();
  }

}
