import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { DatosHeader } from '../model/datosHeader';
import { DatosEducacion } from '../model/datosEducacion';
import { DatosExperiencia } from '../model/datosExperiencia';
import { DatosSkill } from '../model/datosSkill';
import { DatosProyecto } from '../model/datosProyectos';
@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private urlHeader ='https://murmuring-woodland-37915.herokuapp.com/personas/';
  private urlEducacion ='https://murmuring-woodland-37915.herokuapp.com/educacion/';
  private urlExperiencia ='https://murmuring-woodland-37915.herokuapp.com/experiencia/';
  private urlSkill ='https://murmuring-woodland-37915.herokuapp.com/skill/';
  private urlProyectos ='https://murmuring-woodland-37915.herokuapp.com/proyectos/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    }),responseType: 'text' as 'json'
  }
  
  constructor(private http:HttpClient) {
    
   }
   
    public obtenerDatosHeader():Observable<DatosHeader[]>{
     return this.http.get<DatosHeader[]>(this.urlHeader + 'traer').pipe(
      catchError(this.errorHandler)
    );
    }

    public editarDatosHeader(id:number, datos:DatosHeader[]):Observable<DatosHeader[]>{
     return this.http.put<DatosHeader[]>(this.urlHeader + 'editar/'+ id, JSON.stringify(datos), this.httpOptions).pipe(
      catchError(this.errorHandler)
    );
    }
    public buscarDatosHeader(id:number): Observable<DatosHeader[]> {
    return this.http.get<DatosHeader[]>(this.urlHeader + 'buscar/' + id).pipe(
      catchError(this.errorHandler)
    )
    }
    
    public obtenerDatosEducacion():Observable<DatosEducacion[]>{
      return this.http.get<DatosEducacion[]>(`${this.urlEducacion}traer`).pipe(
      catchError(this.errorHandler))}

    public crearDatosEducacion(datos:DatosEducacion[]):Observable<DatosEducacion[]>{
      return this.http.post<DatosEducacion[]>(`${this.urlEducacion}crear`,JSON.stringify(datos), this.httpOptions).pipe(
        catchError(this.errorHandler))};
      
     public editarDatosEducacion(id:number, datos:DatosEducacion[]):Observable<DatosEducacion[]>{
      return this.http.put<DatosEducacion[]>(`${this.urlEducacion}editar/${id}`, JSON.stringify(datos), this.httpOptions).pipe(
       catchError(this.errorHandler))};
     
     
     public buscarDatosEducacion(id:number): Observable<DatosEducacion[]> {
     return this.http.get<DatosEducacion[]>(`${this.urlEducacion}buscar/${id}`).pipe(
    catchError(this.errorHandler))};

     public borrarDatosEducacion(id:number): Observable<DatosEducacion[]> {
      return this.http.delete<DatosEducacion[]>(`${this.urlEducacion}borrar/${id}`, this.httpOptions)
      }


      public obtenerDatosExperiencia():Observable<DatosExperiencia[]>{
        return this.http.get<DatosExperiencia[]>(this.urlExperiencia + 'traer').pipe(
         catchError(this.errorHandler));
       }
       public crearDatosExperiencia(datos:DatosExperiencia[]):Observable<DatosExperiencia[]>{
        return this.http.post<DatosExperiencia[]>(this.urlExperiencia + 'crear',JSON.stringify(datos), this.httpOptions).pipe(
        catchError(this.errorHandler))};

      public editarDatosExperiencia(id:number, datos:DatosExperiencia[]):Observable<DatosExperiencia[]>{
        return this.http.put<DatosExperiencia[]>(this.urlExperiencia + 'editar/'+ id, JSON.stringify(datos), this.httpOptions).pipe(
         catchError(this.errorHandler));
        }
       public buscarDatosExperiencia(id:number): Observable<DatosExperiencia[]> {
       return this.http.get<DatosExperiencia[]>(this.urlExperiencia + 'buscar/' + id).pipe(
         catchError(this.errorHandler));
       }
       public borrarDatosExperiencia(id:number): Observable<DatosExperiencia[]> {
        return this.http.delete<DatosExperiencia[]>(this.urlExperiencia + 'borrar/' + id, this.httpOptions)
        }


        public obtenerDatosSkill():Observable<DatosSkill[]>{
          return this.http.get<DatosSkill[]>(this.urlSkill + 'traer').pipe(
           catchError(this.errorHandler));
         }
         public crearDatosSkill(datos:DatosSkill[]):Observable<DatosSkill[]>{
          return this.http.post<DatosSkill[]>(this.urlSkill + 'crear',JSON.stringify(datos), this.httpOptions).pipe(
          catchError(this.errorHandler))};
         
        public editarDatosSkill(id:number, datos:DatosSkill[]):Observable<DatosSkill[]>{
          return this.http.put<DatosSkill[]>(this.urlSkill + 'editar/'+ id, JSON.stringify(datos), this.httpOptions).pipe(
           catchError(this.errorHandler));
          }
         public buscarDatosSkill(id:number): Observable<DatosSkill[]> {
         return this.http.get<DatosSkill[]>(this.urlSkill + 'buscar/' + id).pipe(
           catchError(this.errorHandler));
         }
         public borrarDatosSkill(id:number): Observable<DatosSkill[]> {
          return this.http.delete<DatosSkill[]>(this.urlSkill + 'borrar/' + id, this.httpOptions)
          }


          public obtenerDatosProyectos():Observable<DatosProyecto[]>{
            return this.http.get<DatosProyecto[]>(this.urlProyectos + 'traer').pipe(
             catchError(this.errorHandler));
           }
           public crearDatosProyectos(datos:DatosProyecto[]):Observable<DatosProyecto[]>{
            return this.http.post<DatosProyecto[]>(this.urlProyectos + 'crear',JSON.stringify(datos), this.httpOptions).pipe(
            catchError(this.errorHandler))};

          public editarDatosProyectos(id:number, datos:DatosProyecto[]):Observable<DatosProyecto[]>{
            return this.http.put<DatosProyecto[]>(this.urlProyectos + 'editar/'+ id, JSON.stringify(datos), this.httpOptions).pipe(
             catchError(this.errorHandler));
            }
           public buscarDatosProyectos(id:number): Observable<DatosProyecto[]> {
           return this.http.get<DatosProyecto[]>(this.urlProyectos + 'buscar/' + id).pipe(
             catchError(this.errorHandler));
           }
           public borrarDatosProyectos(id:number): Observable<DatosProyecto[]> {
            return this.http.delete<DatosProyecto[]>(this.urlProyectos + 'borrar/' + id, this.httpOptions)
            }
     
          errorHandler(error:any) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
      }
    
}

