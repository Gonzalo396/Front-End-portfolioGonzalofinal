import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { DatosExperiencia } from 'src/app/model/datosExperiencia';
import { ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  miForm! : FormGroup;
  experiencia : DatosExperiencia[]=[];
  id!:number;
  constructor(public datosExperiencia:DatosService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.miForm = new FormGroup({
      id: new FormControl(this.id, Validators.required),
      puesto: new FormControl('', Validators.required),
      empresa: new FormControl('', Validators.required),
      trabajoRealiza: new FormControl('', Validators.required),
      tiempo: new FormControl('', Validators.required),
      
    });
  }
  agregar(){
        this.datosExperiencia.crearDatosExperiencia(this.miForm.value).subscribe((res:any) => {
        console.log('datos creado satifactoriamente');this.router.navigateByUrl('/porfolio')});
          }    
  
}