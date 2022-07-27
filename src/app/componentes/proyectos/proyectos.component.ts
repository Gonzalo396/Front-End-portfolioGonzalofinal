import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosProyecto } from 'src/app/model/datosProyectos';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  datos: DatosProyecto[]=[];

  constructor(private datosService:DatosService, private ruta:Router) { }

  ngOnInit(): void {
    this.datosService.obtenerDatosProyectos().subscribe((data:DatosProyecto[])=> {this.datos=data});
  }
  borrarProyecto(id:any){
    this.datosService.borrarDatosProyectos(id).subscribe(res => {
      this.datos = this.datos.filter(item => item.id !== id);
      console.log('Proyecto borrado')})
    }

  

 

}
