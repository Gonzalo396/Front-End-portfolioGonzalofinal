import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {
  miForm! : FormGroup;
  user:any;
  id!:number;
  
  constructor(public datosPorfolio:DatosService,
    private route: ActivatedRoute, private router: Router, public formBuilder:FormBuilder) {
      this.miForm = this.formBuilder.group({
      id:[''],
      habilidad:[''],
      porcentaje:['0']
     
     })}

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.datosPorfolio.buscarDatosSkill(this.id).subscribe(data => {console.log(data); this.user=data;
      this.miForm =this.formBuilder.group({
      id:[this.id],
      habilidad:[this.user.habilidad],
      porcentaje:[this.user.porcentaje]
    })});

  }

  editar(){
    console.log(this.miForm.value);
    this.datosPorfolio.editarDatosSkill(this.id, this.miForm.value).subscribe((res:any) => {
        console.log('Skill editado');this.router.navigateByUrl('/porfolio')});
        }
  

}
