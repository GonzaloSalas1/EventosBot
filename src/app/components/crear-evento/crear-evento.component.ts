import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/services/evento.service';
import { OauthService } from 'src/app/services/oauth.service';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {
  titulo = 'Agregar Evento';

  crearEvento: FormGroup;
  submitted = false;

  userId: string = "";

  constructor(private fb: FormBuilder, private _eventoService: EventoService, private router: Router, private _oauth: OauthService) {
    this.crearEvento = this.fb.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      tipoEvento: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this._oauth.getUser().subscribe(res => {
      this.userId = res.id;
    })
  }

  agregarEvento(){
    this.submitted = true;
    if(this.crearEvento.invalid) return;
    
    const fechaEvento: string= new Date(this.crearEvento.value.fecha).toString();

    const evento = {
      nombre: this.crearEvento.value.nombre,
      fecha: fechaEvento,
      tipoEvento: this.crearEvento.value.tipoEvento,
      idCreador: this.userId,
      idServidor: '695093366546759762'
    }

    this._eventoService.agregarEvento(evento).then(() => {
      console.log("Evento agregado")
      this.router.navigate(['/lista-eventos']);
    }).catch(error => {
      console.log(error);
    })
  }

}
