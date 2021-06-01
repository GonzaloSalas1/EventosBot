import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent implements OnInit {

  titulo = 'Editar evento';

  editarEvento: FormGroup;
  id: string | null;

  constructor(private fb: FormBuilder, private _eventoService: EventoService, private router: Router,
    private aRoute: ActivatedRoute) {
    this.editarEvento = this.fb.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required]
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  modificarEvento(){
    //cambiar que no quuede vacio
    const evento = {
      nombre: this.editarEvento.value.nombre,
      fecha: this.editarEvento.value.fecha
    }

    this._eventoService.actualizarEvento(this.id, evento).then(() => {
      console.log("evento modificado")
      this.router.navigate(['/lista-eventos']);
    }).catch(error => {
      console.log(error);
    })
  }

}
