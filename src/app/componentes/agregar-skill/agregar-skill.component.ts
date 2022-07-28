import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosSkill } from 'src/app/model/datosSkill';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-agregar-skill',
  templateUrl: './agregar-skill.component.html',
  styleUrls: ['./agregar-skill.component.css']
})
export class AgregarSkillComponent implements OnInit {
  miForm! : FormGroup;
  skill : DatosSkill[]=[];
  id!:number;
 
  constructor(public datosSkill:DatosService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    this.miForm = new FormGroup({
      id: new FormControl(this.id, Validators.required),
      habilidad: new FormControl('', Validators.required),
      porcentaje: new FormControl('0', Validators.required),
      
    });
  }
  

  agregar(){
    this.datosSkill.crearDatosSkill(this.miForm.value).subscribe((res:any) => {
      console.log('Skill creado');this.router.navigateByUrl('/porfolio')});
      
      console.log(this.miForm.value);
    
    }
}
