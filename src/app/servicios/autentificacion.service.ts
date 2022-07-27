import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
url="http://localhost:8080/auth/login";
currenUserSubjet: BehaviorSubject<any>;
  constructor(private http:HttpClient, private ruta:Router) { 
    console.log("el servicion de autenticacion esta corriendo");
    this.currenUserSubjet = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }

  Login(credenciales:any):Observable<any>{
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data)); this.currenUserSubjet.next(data);
      return data;
    }))
  }
  get UsuarioAutenticado()
  {
    return this.currenUserSubjet.value;
  }

  public logOut(): void {
    window.sessionStorage.clear();
    this.ruta.navigate(['/login']);
  }
}
