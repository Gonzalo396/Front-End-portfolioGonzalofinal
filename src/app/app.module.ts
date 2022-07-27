import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillComponent } from './componentes/skill/skill.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditarHaederComponent } from './componentes/editar-haeder/editar-haeder.component';
import { EditarExperienciaComponent } from './componentes/editar-experiencia/editar-experiencia.component';
import { EditarEducacionComponent } from './componentes/editar-educacion/editar-educacion.component';
import { EditarSkillComponent } from './componentes/editar-skill/editar-skill.component';
import { EditarProyectosComponent } from './componentes/editar-proyectos/editar-proyectos.component';
import { AgregarEducacionComponent } from './componentes/agregar-educacion/agregar-educacion.component';
import { AgregarExperienciaComponent } from './componentes/agregar-experiencia/agregar-experiencia.component';
import { AgregarSkillComponent } from './componentes/agregar-skill/agregar-skill.component';
import { AgregarProyectosComponent } from './componentes/agregar-proyectos/agregar-proyectos.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './servicios/interceptor.service';
import { NgCircleProgressModule } from 'ng-circle-progress';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillComponent,
    ProyectosComponent,
    LoginComponent,
    EditarHaederComponent,
    EditarExperienciaComponent,
    EditarEducacionComponent,
    EditarSkillComponent,
    EditarProyectosComponent,
    AgregarEducacionComponent,
    AgregarExperienciaComponent,
    AgregarSkillComponent,
    AgregarProyectosComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
    "unitsFontSize": "27",
    "outerStrokeColor": "#ff8800",
    "innerStrokeColor": "#6f5d49",
    "titleFontSize": "30",
    "subtitleColor": "#000000",
    "subtitleFontSize": "19"
     })
     
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
