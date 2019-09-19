import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public new_login: any;
  constructor(private _LoginService: LoginService, private router: Router)
  {
    this.new_login= {
      "email":"",
      "password": ""
    };
  }

  ngOnInit()
  {

  }
  onSubmit(login)
  {
    this.setEnviarLogin(login);
  }

  setEnviarLogin(login)
  {
    console.log(this.new_login.email);
    console.log(this.new_login.password);
    this._LoginService.login(this.new_login).subscribe(
      response => {
        this._LoginService.setUser(response.usuario);
        let token = response.token;
        this._LoginService.setToken(token);
        this.router.navigate(["/create-movie"]);
        console.log(response);
        login.reset();
      },
      error => {
        console.log(error);
        if(error.status===401)
        {
          alert("Acceso no autorizado");
          login.reset();
        }
        else
        {
          alert("Error, Datos invalidos");
          login.reset();
        }
      }
    );
  }


}
