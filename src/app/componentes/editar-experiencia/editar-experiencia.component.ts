import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  miForm! : FormGroup;
  user:any;
  id!:number;
  
  constructor(public datosPorfolio:DatosService,
    private route: ActivatedRoute, private router: Router, public formBuilder:FormBuilder) {
      this.miForm = this.formBuilder.group({
      id:[''],
      puesto:[''],
      empresa:[''],
      trabajoRealiza:[''],
      tiempo:['']
     })}

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.datosPorfolio.buscarDatosExperiencia(this.id).subscribe(data => {console.log(data); this.user=data;
      this.miForm =this.formBuilder.group({
      id:[this.id],
      puesto:[this.user.puesto],
      empresa:[this.user.empresa],
      trabajoRealiza:[this.user.trabajoRealiza],
      tiempo:[this.user.tiempo]
    })});

  }
  editar(){

  
    console.log(this.miForm.value);
    this.datosPorfolio.editarDatosExperiencia(this.id, this.miForm.value).subscribe((res:any) => {
        console.log('Post updated successfully!');this.router.navigateByUrl('/porfolio')});
        }
  

}
