import { EditarEventoComponent } from './components/editar-evento/editar-evento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'lista-eventos', component: ListaEventosComponent },
  { path: 'crear-evento', component: CrearEventoComponent, canActivate: [AuthGuard] },
  { path: 'editar-evento/:id', component:  EditarEventoComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
