import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosEducacion } from 'src/app/model/datosEducacion';
import { DatosService } from 'src/app/servicios/datos.service'; 

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  datos: DatosEducacion[]=[];
  
  constructor(private datosService:DatosService, private ruta:Router) {

   }

  ngOnInit(): void {
    this.datosService.obtenerDatosEducacion().subscribe((data:DatosEducacion[])=> {this.datos=data});

  }
  borrarEducacion(id:any){
    this.datosService.borrarDatosEducacion(id).subscribe(res => {
      this.datos = this.datos.filter(item => item.id !== id);
      console.log('educacion borrada')})
    

  }


}
