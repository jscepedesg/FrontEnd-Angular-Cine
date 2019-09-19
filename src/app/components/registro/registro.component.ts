import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [UserService]
})
export class RegistroComponent implements OnInit {

  public new_user: any;

  constructor(private _UserService: UserService)
  {
    this.new_user = {
      "name": "",
      "lastName": "",
      "email": "",
      "password": ""
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
    this._UserService.addUser(this.new_user).subscribe(
      response => {
        console.log(response);
        form.reset();
      },
      error => {

        console.log(error);
        if(error.status===422)
        {
          alert("Ya hay un usuario registrado con el mismo correo o contraseña");
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
}
