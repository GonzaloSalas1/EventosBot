import { LoginComponent } from './components/login/login.component';
import { EditarEventoComponent } from './components/editar-evento/editar-evento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'lista-eventos', component: ListaEventosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'crear-evento', component: CrearEventoComponent },
  { path: 'editar-evento/:id', component:  EditarEventoComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
