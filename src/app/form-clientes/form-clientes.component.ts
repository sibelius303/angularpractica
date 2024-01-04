import { Component } from '@angular/core';
import { NombreDelServicioService } from '../nombre-del-servicio.service';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent {

  clientes: any[] = [];
  nuevoCliente: any = {
    nombre: '',
    apellido: '',
    documento: '',
    typedomicilio: '',
    consumo: 0,
    deuda: 0,
  };

  constructor(private clientesService: NombreDelServicioService) {
    this.clientes = this.clientesService.obtenerClientes();
  }

  agregarNuevoCliente(): void {
    this.clientesService.agregarCliente(this.nuevoCliente);
    this.clientes = this.clientesService.obtenerClientes();
    this.nuevoCliente = {
      nombre: '',
      apellido: '',
      documento: '',
      typedomicilio: '',
      consumo: 0,
      deuda: 0,
    };
  }

  onSubmit() {
    this.agregarNuevoCliente();
    console.log('Formulario enviado:', this.nuevoCliente);
  }

}
