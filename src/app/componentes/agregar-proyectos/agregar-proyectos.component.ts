import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DatosProyecto } from 'src/app/model/datosProyectos';
@Component({
  selector: 'app-agregar-proyectos',
  templateUrl: './agregar-proyectos.component.html',
  styleUrls: ['./agregar-proyectos.component.css']
})
export class AgregarProyectosComponent implements OnInit {
  miForm! : FormGroup;
  proyecto : DatosProyecto[]=[];
  id!:number;
  constructor(public datosProyecto:DatosService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.miForm = new FormGroup({
      id: new FormControl(this.id, Validators.required),
      proyecto: new FormControl('', Validators.required),
      descripcionProyecto: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      
    });
  }
  agregar(){
        this.datosProyecto.crearDatosProyectos(this.miForm.value).subscribe((res:any) => {
        console.log('datos creado satifactoriamente');this.router.navigateByUrl('/porfolio')});
          }    
}
