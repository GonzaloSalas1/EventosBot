import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {

  eventos: any[] = [];

  constructor(private _eventoService: EventoService) { }

  ngOnInit(): void {
    this.getEvento();
  }

  getEvento() {
    this._eventoService.getEventos().subscribe(data => {
      this.eventos = [];
      data.forEach((element: any) => {
        this.eventos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    });
  }

  eliminarEvento(id: string) {
    this._eventoService.eliminarEvento(id).then(() => {
      console.log('empelado eliminado con exito');
    }).catch(error => {
      console.log(error);
    })
  }
}
