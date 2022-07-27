import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
  miForm! : FormGroup;
  user:any;
  id!:number;
  
  constructor(public datosPorfolio:DatosService,
    private route: ActivatedRoute, private router: Router, public formBuilder:FormBuilder) {
      this.miForm = this.formBuilder.group({
        id:[''],
      institucion:[''],
      titulo:[''],
      tiempo:[''],
      
     })}

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.datosPorfolio.buscarDatosEducacion(this.id).subscribe(data => {console.log(data); this.user=data;
      this.miForm =this.formBuilder.group({
      id:[this.id],
      institucion:[this.user.institucion],
      titulo:[this.user.titulo],
      tiempo:[this.user.tiempo],
      
    })});

  }
  editar(){

  
    console.log(this.miForm.value);
    this.datosPorfolio.editarDatosEducacion(this.id, this.miForm.value).subscribe((res:any) => {
        console.log('Post updated successfully!');this.router.navigateByUrl('/porfolio')});
        }
  
}
