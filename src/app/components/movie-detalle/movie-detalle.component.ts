import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import {Pelicula} from '../../models/Pelicula';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detalle',
  templateUrl: './movie-detalle.component.html',
  styleUrls: ['./movie-detalle.component.css'],
  providers: [PeliculaService]
})
export class MovieDetalleComponent implements OnInit {

  public url: string;
  public pelicula: Pelicula;
  public urlSinProcesar: string;
  public  urlSaneada: any;
  constructor(private _PeliculaService: PeliculaService, private _router: Router, private _route: ActivatedRoute,private sanitizer: DomSanitizer)
  {
    this.url="http://localhost:3700/";
  }

  ngOnInit()
  {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getPelicula(id);
    });
  }

  getPelicula(id)
  {
    this._PeliculaService.getPelicula(id).subscribe(
      response => {
        console.log(response);
        this.pelicula = response.pelicula;
        this.urlSinProcesar = this.pelicula.ruta_trailer;
        this.urlSaneada= this.sanitizer.bypassSecurityTrustResourceUrl(this.urlSinProcesar);
      },
      error =>
      {
        console.log(error);
      }
    );
  }


}
