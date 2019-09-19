import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import {Pelicula} from '../../models/Pelicula';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-cartelera',
  templateUrl: './add-cartelera.component.html',
  styleUrls: ['./add-cartelera.component.css'],
  providers: [PeliculaService]
})
export class AddCarteleraComponent implements OnInit {

  private peliculas: Pelicula;
  public idPelicula: any;
  public peliculaACartelera: any;
  constructor(private _PeliculaService: PeliculaService, private router: Router)
  {
    this.idPelicula= {
      "id":""
    };
    this.peliculaACartelera=
    {
      "referenciaPelicula": "",
      "fecha_de_publicacion": ""
    }
  }

  ngOnInit()
  {
    this.getListPeliculas();
  }

  getListPeliculas()
  {
    this._PeliculaService.getAllPeliculas().subscribe(
      result => {
        console.log(result);
        console.log(result.peliculas.length);
        console.log(result.peliculas[0].nombre);
        this.peliculas=result.peliculas;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  addPelicula(id: string): void
  {
    //console.log(id);
    this.idPelicula.id=id;
    //console.log(this.idPelicula);
    this._PeliculaService.addCartelera(this.idPelicula).subscribe(
      response => {
        console.log(response);
        alert("La pelicula ya esta en cartelera");
      },
      error => {
        console.log(error);
        if(error.status===404)
        {
          this.addPeliculaToCartelera();
        }
        else
        {
          alert("Error, Datos invalidos");
        }
      }
    );
  }

  addPeliculaToCartelera()
  {
    this.peliculaACartelera.referenciaPelicula=this.idPelicula.id;
    this.peliculaACartelera.fecha_de_publicacion= new Date().toString();
    //console.log(this.peliculaACartelera);
    this._PeliculaService.addPeliculaToCartelera(this.peliculaACartelera).subscribe(
      response => {
        console.log(response);
        this.router.navigate(["/delete-cartelera"]);

      },
      error => {
        console.log(error);
      }
    );
  }

}
