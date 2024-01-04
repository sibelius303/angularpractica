import { Component } from '@angular/core';
import { NombreDelServicioService } from '../nombre-del-servicio.service';

@Component({
  selector: 'app-filter-clientes',
  templateUrl: './filter-clientes.component.html',
  styleUrls: ['./filter-clientes.component.css']
})
export class FilterClientesComponent {
  clientes: any[] = [];

  constructor(private clientesService: NombreDelServicioService) {
    this.clientes = this.clientesService.obtenerClientes();
  }

  nombreCliente: any = {
    nombre: ''
  };

  findClient(){
    this.clientesService.encontrarCliente(this.nombreCliente.nombre);
    this.clientes = this.clientesService.obtenerClientes();
    this.nombreCliente = {
      nombre: ''
    }
  }

  onSubmit() {
    this.findClient()
  }



  // limpiar() {
  //   this.clientesService.restaurarEstadoOriginal();
  // }

}
