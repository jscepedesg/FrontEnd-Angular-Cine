import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from 'src/app/services/login.service';
@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {

  constructor(private _LoginService: LoginService, private router: Router)
  {

  }

  canActivate()
  {
    if(!this._LoginService.getCurrentUser())
    {
      return true;
    }
    else
    {
      alert("Debes cerrar sesión primero");
      this.router.navigate(["/home"]);
      return false;
    }
  }

}
