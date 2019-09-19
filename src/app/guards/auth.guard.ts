import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _LoginService: LoginService, private router: Router)
  {

  }

  canActivate()
  {
    if(this._LoginService.getCurrentUser())
    {
      return true;
    }
    else
    {
      alert("Debes iniciar sesión");
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
