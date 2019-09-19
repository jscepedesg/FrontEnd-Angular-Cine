import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import {Pelicula} from '../../models/Pelicula';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PeliculaService]
})
export class HomeComponent implements OnInit {

  private peliculas: Pelicula[];
  private cartelera: Array<Pelicula>;
  public url: string;
  constructor(private _PeliculaService: PeliculaService, private router: Router)
  {
    this.cartelera=[];
    this.url="http://localhost:3700/";
  }

  ngOnInit()
  {
    this.getListPeliculasToCartelera();
  }

  getListPeliculasToCartelera()
  {
    this._PeliculaService.getAllPeliculasToCartelera().subscribe(
      result => {
        console.log(result);
        for(var i=0; i<result.cartelera.length;i++)
        {
          //console.log(result.cartelera[i].referenciaPelicula);
          this.cartelera.push(result.cartelera[i].referenciaPelicula);
        }
        //console.log(result.peliculas.length);
        //console.log(result.peliculas[0].nombre);
        this.peliculas= this.cartelera;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
