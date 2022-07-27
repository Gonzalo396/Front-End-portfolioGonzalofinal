import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosExperiencia } from 'src/app/model/datosExperiencia';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  datos: DatosExperiencia[]=[];

  constructor(private datosService:DatosService, private ruta:Router) { }

  ngOnInit(): void {
    this.datosService.obtenerDatosExperiencia().subscribe((data:DatosExperiencia[])=> {this.datos=data});
  }
  borrarExperiencia(id:any){
    this.datosService.borrarDatosExperiencia(id).subscribe(res => {
      this.datos = this.datos.filter(item => item.id !== id);
      console.log('educacion borrada')})
    

  }

  

}
