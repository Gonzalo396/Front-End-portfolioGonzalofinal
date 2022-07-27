import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosHeader } from 'src/app/model/datosHeader';
import { DatosService } from 'src/app/servicios/datos.service'; 
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  datos: DatosHeader[]=[];

  constructor(private datosService:DatosService, private ruta:Router, private autenticacion:AutentificacionService ) {

   }

  ngOnInit(): void {
    this.datosService.obtenerDatosHeader().subscribe((data: DatosHeader[])=> {this.datos=data});

  }
  carrarSesion(): void{
    this.autenticacion.logOut();
  }

}
