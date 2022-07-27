import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { DatosEducacion } from 'src/app/model/datosEducacion';
import { ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {
  miForm! : FormGroup;
  experiencia : DatosEducacion[]=[];
  id!:number;

  constructor(public datosEducacion:DatosService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.miForm = new FormGroup({
      id: new FormControl(this.id, Validators.required),
      institucion: new FormControl('', Validators.required),
      titulo: new FormControl('', Validators.required),
      tiempo: new FormControl('', Validators.required)})
  }
  agregar(){
        console.log("formulario" + JSON.stringify(this.miForm.value));
        this.datosEducacion.crearDatosEducacion(this.miForm.value).subscribe((res:any) => {
        console.log('datos creado satifactoriamente');this.router.navigateByUrl('/porfolio')});
        
      }    

}
