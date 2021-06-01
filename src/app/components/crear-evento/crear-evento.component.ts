import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {
  titulo = 'Agregar Evento';

  crearEvento: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private _eventoService: EventoService, private router: Router) {
    this.crearEvento = this.fb.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  agregarEvento(){
    this.submitted = true;
    if(this.crearEvento.invalid) return;

    const evento = {
      nombre: this.crearEvento.value.nombre,
      fecha: this.crearEvento.value.fecha
    }

    this._eventoService.agregarEvento(evento).then(() => {
      console.log("evento agregado")
      this.router.navigate(['/lista-eventos']);
    }).catch(error => {
      console.log(error);
    })
  }

}
