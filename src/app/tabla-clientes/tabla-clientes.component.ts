import { Component } from '@angular/core';
import { NombreDelServicioService } from '../nombre-del-servicio.service';


@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent {
  clientes : any[] = [];
  listaFinal: any[] = [];
  nombreCliente: any = {
    nombre: ''
  };

  ordenar: boolean = false;
  deuda: boolean = false;

  constructor(private clientesService: NombreDelServicioService) {
    this.clientes = this.clientesService.obtenerClientes();
    this.procesarCliente()
  }

  procesarCliente(){this.listaFinal = this.clientes.map(cliente => ({
    nombre: cliente.nombre,
    apellido: cliente.apellido,
    documento: cliente.documento,
    typedomicilio: cliente.typedomicilio,
    consumo: cliente.typedomicilio === 'residencial' ? (cliente.consumo * 2.25) + '$' : (cliente.consumo * 4.5) + '$',
    deuda: cliente.deuda,
    descuento: cliente.typedomicilio === 'residencial' ? cliente.consumo <= 2000 ? '0%' : cliente.consumo > 2000 && cliente.consumo <= 5000 ? '10%' : '15%' : cliente.consumo <= 5000 ? '0%' : cliente.consumo > 5000 && cliente.consumo <= 7000 ? '10%' : '15%' ,
    paid: cliente.typedomicilio === 'residencial' ? cliente.consumo <= 2000 ? cliente.consumo * 2.25 + cliente.deuda + '$' : cliente.consumo > 2000 && cliente.consumo < 5000 ? (cliente.consumo * 2.25 + cliente.deuda) - (cliente.consumo * 2.25 + cliente.deuda) * 10 / 100 + '$' : cliente.consumo * 2.25 + cliente.deuda - (cliente.consumo * 2.25 + cliente.deuda) * 15 / 100 + '$' : cliente.consumo < 5000 ? (cliente.consumo * 4.5 + cliente.deuda) + '$' : cliente.consumo > 5000 && cliente.consumo < 7000 ? cliente.consumo * 4.5 + cliente.deuda - (cliente.consumo * 4.5 + cliente.deuda) * 10 / 100 + '$' : cliente.consumo * 4.5 + cliente.deuda - (cliente.consumo * 4.5 + cliente.deuda ) * 15 / 100 + '$',
  }))}

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
