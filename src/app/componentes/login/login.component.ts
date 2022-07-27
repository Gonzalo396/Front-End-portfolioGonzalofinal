import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup;
  constructor(private formBuilder:FormBuilder, private autentificacionService:AutentificacionService, private rutas:Router) {
    this.form=this.formBuilder.group({
  
      nombreUsuario:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(7)]]
    }
    )
   }

  ngOnInit(): void {
  }

  get NombreUsuario(){
    return this.form.get('nombreUsuario');
    
  }
  get Password(){
    return this.form.get('password');
    
  }

  onLogin(event:Event){
    event.preventDefault;
    console.log("datos del formulario :" + this.form)
    this.autentificacionService.Login(this.form.value).subscribe(data=>{console.log("DATA :" + JSON.stringify(data)); this.rutas.navigate(['/portfolio'])})
  }

}
