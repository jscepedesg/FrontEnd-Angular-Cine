import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  public url: string;

  constructor(public _http: HttpClient)
  {
    this.url="http://localhost:3700/";
  }

  //Envia la informacion de pelicula a mi ruta api/save-pelicula
  addPelicula(pelicula): Observable<any>
  {
    let json = JSON.stringify(pelicula);
    let headers = new HttpHeaders().set('content-Type','application/json');

    return this._http.post(this.url+'api/save-pelicula',json, {headers});
  }
  //Metodo para cargar y enviar la imagen al servidor
  addImagePelicula(url: string, params: Array<string>, files: Array<File>, name: string)
  {
    return new Promise(function (resolve, reject){
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();

      for(var i = 0; i< files.length; i++)
      {
        formData.append(name, files[i], files[i].name);
      }

      xhr.onreadystatechange = function()
      {
        if(xhr.readyState== 4)
        {
          if(xhr.status==200)
          {
            resolve(JSON.parse(xhr.response));
          }
          else
          {
            reject(xhr.response);
          }
        }
      }

      xhr.open('POST',url,true);
      xhr.send(formData);
    });
  }

  //Metodo para optener todas las pelicula del servidor
  getAllPeliculas(): Observable<any>
  {
    return this._http.get(this.url+'api/peliculas/');
  }

  //Metodo para verificar si la pelicula ya esta en cartelera
  addCartelera(id): Observable<any>
  {
    let json = JSON.stringify(id);
    let headers = new HttpHeaders().set('content-Type','application/json');

    return this._http.post(this.url+'api/peliculaInCartelera',json, {headers});
  }
  //Metodo para agregar las peliculas a cartelera en el servidor
  addPeliculaToCartelera(pelicula): Observable<any>
  {
    let json = JSON.stringify(pelicula);
    let headers = new HttpHeaders().set('content-Type','application/json');

    return this._http.post(this.url+'api/save-pelicula-en-cartelera',json, {headers});
  }
  //Me devulve todas las peliculas del servidor que estan en cartelera
  getAllPeliculasToCartelera(): Observable<any>
  {
    return this._http.get(this.url+'api/cartelera-peliculas/');
  }
  //Eliminar una pelicula de la cartelera
  deleteCartelera(id): Observable<any>
  {
    return this._http.delete(this.url+'api/cartelera-pelicula/'+id);
  }

  getPelicula(id): Observable<any>
  {
    let headers = new HttpHeaders().set('content-Type','application/json');
    return this._http.get(this.url+'api/pelicula/'+id,{headers});
  }
}
