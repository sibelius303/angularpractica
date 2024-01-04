import { Component } from '@angular/core';
import { NombreDelServicioService } from '../nombre-del-servicio.service';


@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent {
  clientes : any[] = [];
  nombreCliente: any = {
    nombre: ''
  };

  ordenar: boolean = false;
  deuda: boolean = false;

  constructor(private clientesService: NombreDelServicioService) {
    this.clientes = this.clientesService.obtenerClientes();
  }

  eliminarCliente(cliente: any): void {
    this.clientesService.eliminarCliente(cliente);
    this.clientes = this.clientesService.obtenerClientes();
  }
  

  onSubmit(): void {
    if (this.nombreCliente.nombre.trim() !== '') {
      // Filtra los clientes por nombre
      this.clientes = this.clientesService.obtenerClientes().filter(cliente =>
        cliente.nombre.toLowerCase().includes(this.nombreCliente.nombre.toLowerCase())
      );
    } else {
      // Si el campo de filtro está vacío, muestra todos los clientes
      this.clientes = this.clientesService.obtenerClientes();
    }
    this.nombreCliente = {nombre: ""}
  }

  actualizarListaClientes(): void {
    this.clientes = this.clientesService.obtenerClientes();
    this.deuda = false;
    this.ordenar = false;
  }

  onChangeOrdenar(): void {
    if(this.ordenar){
      this.clientes = this.clientesService.obtenerClientes().sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else {
      this.clientes = this.clientesService.obtenerClientes();
    }
  }

  onChangeDeuda(): void {
    if(this.deuda){
      this.clientes = this.clientesService.obtenerClientes().filter(el=>el.deuda > 0);
    } else {
      this.clientes = this.clientesService.obtenerClientes();
    }
  }
}
