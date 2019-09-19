import { Component, OnInit } from '@angular/core';
import {PeliculaService} from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
  providers: [PeliculaService]
})
export class CreateMovieComponent implements OnInit {

  public new_pelicula: any;
  public new_image: any;
  public filesToUpload: Array<File>;

  constructor(private _PeliculaService: PeliculaService)
  {
    this.new_pelicula = {
      "nombre": "",
      "sinopsis": "",
      "clasificacion": "",
      "duracion": "",
      "genero": "",
      "director": "",
      "reparto": "",
      "pais": "",
      "idioma": "",
      "fecha_de_estreno": "",
      "ruta_trailer": ""
    };
  }

  ngOnInit() {
  }

  onSubmit(form)
  {
    this.setEnviarUsuario(form);
  }

  setEnviarUsuario(form)
  {
    this._PeliculaService.addPelicula(this.new_pelicula).subscribe(
      response => {
        console.log(response);
        this._PeliculaService.addImagePelicula("http://localhost:3700/api/upload-image/"+response.pelicula._id,[],this.filesToUpload, 'image')
        .then((reslt: any)=> {
          console.log(reslt);
          form.reset();
        });
      },
      error => {

        console.log(error);
        if(error.status===422)
        {
          alert("Ya hay un pelicula registrado con el mismo correo o contraseña");
          form.reset();
        }
        else
        {
          alert("Error, Datos invalidos");
          form.reset();
        }
      }
    );
  }
  setEnviarImagen(fileInput: any)
  {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
