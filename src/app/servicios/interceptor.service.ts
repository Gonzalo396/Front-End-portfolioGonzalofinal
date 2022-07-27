import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutentificacionService } from './autentificacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private autentificacionService:AutentificacionService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser=this.autentificacionService.UsuarioAutenticado;
      req=req.clone({setHeaders:{
        Authorization: `Bearer ${currentUser.token}`
      }});
    
    console.log("el interseptor esta corriendo "+ currentUser.token);
    return next.handle(req);
  }
}
