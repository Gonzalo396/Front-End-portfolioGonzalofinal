import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEducacionComponent } from './componentes/agregar-educacion/agregar-educacion.component';
import { AgregarExperienciaComponent } from './componentes/agregar-experiencia/agregar-experiencia.component';
import { AgregarProyectosComponent } from './componentes/agregar-proyectos/agregar-proyectos.component';
import { AgregarSkillComponent } from './componentes/agregar-skill/agregar-skill.component';
import { EditarEducacionComponent } from './componentes/editar-educacion/editar-educacion.component';
import { EditarExperienciaComponent } from './componentes/editar-experiencia/editar-experiencia.component';
import { EditarHaederComponent } from './componentes/editar-haeder/editar-haeder.component';
import { EditarProyectosComponent } from './componentes/editar-proyectos/editar-proyectos.component';
import { EditarSkillComponent } from './componentes/editar-skill/editar-skill.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillComponent } from './componentes/skill/skill.component';
import { GuardGuard } from './guard/guard.guard';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path: 'portfolio' , component:PortfolioComponent, canActivate: [GuardGuard]}, 
  {path:'editar-header/:id', component:EditarHaederComponent}, 
  {path:'agregar-educacion', component:AgregarEducacionComponent},
  {path:'editar-educacion/:id', component:EditarEducacionComponent},
  {path:'agregar-experiencia', component:AgregarExperienciaComponent},
  {path:'editar-experiencia/:id', component:EditarExperienciaComponent},
  {path:'agregar-skill', component:AgregarSkillComponent},
  {path:'editar-skill/:id', component:EditarSkillComponent},
  {path:'agregar-proyectos', component:AgregarProyectosComponent},
  {path:'editar-proyectos/:id', component:EditarProyectosComponent},
  {path:'**', redirectTo:'/portfolio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
