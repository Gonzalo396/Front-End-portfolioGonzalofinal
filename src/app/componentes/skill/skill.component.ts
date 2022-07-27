import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosSkill } from 'src/app/model/datosSkill';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  datos: DatosSkill[]=[];

  constructor(private datosService:DatosService, private ruta:Router) { }

  ngOnInit(): void {
    this.datosService.obtenerDatosSkill().subscribe((data:DatosSkill[])=> {this.datos=data});
  }
  borrarSkill(id:any){
    this.datosService.borrarDatosSkill(id).subscribe(res => {
      this.datos = this.datos.filter(item => item.id !== id);
      console.log('skill borrado')})
    

  }

}
