import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string;

  constructor(public _http: HttpClient)
  {
    this.url="http://localhost:3700/";
  }

  //Envia la informacion de usuario a mi ruta api/save-usuario
  addUser(user): Observable<any>
  {
    let json = JSON.stringify(user);
    let headers = new HttpHeaders().set('content-Type','application/json');

    return this._http.post(this.url+'api/save-usuario',json, {headers});
  }

}
