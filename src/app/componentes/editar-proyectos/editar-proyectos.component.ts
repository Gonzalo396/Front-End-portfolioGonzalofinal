import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {
  miForm! : FormGroup;
  user:any;
  id!:number;
  
  constructor(public datosPorfolio:DatosService,
    private route: ActivatedRoute, private router: Router, public formBuilder:FormBuilder) {
      this.miForm = this.formBuilder.group({
      id:[''],
      proyecto:[''],
      descripcionProyecto:[''],
      url:[''],
      fecha:['']
     })}

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.datosPorfolio.buscarDatosProyectos(this.id).subscribe(data => {console.log(data); this.user=data;
      this.miForm =this.formBuilder.group({
      id:[this.id],
      proyecto:[this.user.proyecto],
      descripcionProyecto:[this.user.descripcionProyecto],
      url:[this.user.url],
      fecha:[this.user.fecha]
    })});

  }
  editar(){

  
    console.log(this.miForm.value);
    this.datosPorfolio.editarDatosProyectos(this.id, this.miForm.value).subscribe((res:any) => {
        console.log('updated successfully!');this.router.navigateByUrl('/porfolio')});
        }
  


}
