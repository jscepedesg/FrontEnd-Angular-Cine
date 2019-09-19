import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import {Pelicula} from '../../models/Pelicula';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-cartelera',
  templateUrl: './delete-cartelera.component.html',
  styleUrls: ['./delete-cartelera.component.css'],
  providers: [PeliculaService]
})
export class DeleteCarteleraComponent implements OnInit {

  private peliculas: Pelicula[];
  private cartelera: Array<Pelicula>;
  constructor(private _PeliculaService: PeliculaService, private router: Router)
  {
    this.cartelera=[];
  }

  ngOnInit()
  {
    this.getListPeliculas();
  }

  getListPeliculas()
  {
    this._PeliculaService.getAllPeliculasToCartelera().subscribe(
      result => {
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
  deletePelicula(id)
  {
    console.log(id);
    this._PeliculaService.deleteCartelera(id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(["/home"]);
      },
      error => {
        console.log(error);
      }
    );
  }

}
