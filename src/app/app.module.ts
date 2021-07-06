import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { ReactiveFormsModule } from '@angular/forms';

import { environment as env } from '../environments/environment';

import { AppComponent } from './app.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';
import { EditarEventoComponent } from './components/editar-evento/editar-evento.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ListaServersComponent } from './components/lista-servers/lista-servers.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
    ListaEventosComponent,
    CrearEventoComponent,
    EditarEventoComponent,
    LoginComponent,
    ListaServersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(env.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...env.auth,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
