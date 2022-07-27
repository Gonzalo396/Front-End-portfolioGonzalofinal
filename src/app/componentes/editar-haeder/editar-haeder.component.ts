import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-editar-haeder',
  templateUrl: './editar-haeder.component.html',
  styleUrls: ['./editar-haeder.component.css']
})
export class EditarHaederComponent implements OnInit {
  miForm! : FormGroup;
  user:any;
  id!:number;
  
  
  
 

  constructor(public datosPorfolio:DatosService,
    private route: ActivatedRoute, private router: Router, public formBuilder:FormBuilder) {
      this.miForm = this.formBuilder.group({
        id:[''],
      nombre:[''],
      apellido:[''],
      edad:[''],
      email:[''],
      tel:[''],
      provincia:[''],
      ciudad:[''],
      pais:['']
     })}

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.datosPorfolio.buscarDatosHeader(this.id).subscribe(data => {console.log(data); this.user=data;
      this.miForm =this.formBuilder.group({
      id:[this.id],
      nombre:[this.user.nombre],
      apellido:[this.user.apellido],
      edad:[this.user.edad],
      email:[this.user.email],
      tel:[this.user.tel],
      provincia:[this.user.provincia],
      ciudad:[this.user.ciudad],
      pais:[this.user.pais]
    })});

  }
  editar(){

  
    console.log(this.miForm.value);
    this.datosPorfolio.editarDatosHeader(this.id, this.miForm.value).subscribe((res:any) => {
        console.log('Post updated successfully!');this.router.navigateByUrl('/porfolio')});
        }
  
}
  
