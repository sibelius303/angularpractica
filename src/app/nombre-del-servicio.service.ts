import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NombreDelServicioService {
  listaClientes: any[] = [
    { nombre: 'cesar', apellido: 'vallenilla', documento: '95992960', typedomicilio: 'residencial', consumo: 2000, deuda: 900 },
    { nombre: 'eduardo', apellido: 'torrealba', documento: '95992960', typedomicilio: 'comercial', consumo: 8000, deuda: 1900 },
  ];
  listaFinal: any[] = []

  obtenerClientes(): any[] {
    return this.listaClientes;
  }
  agregarCliente(cliente: any): void {
    this.listaClientes.push(cliente);
  }

  eliminarCliente(cliente: any): void {
    const index = this.listaClientes.indexOf(cliente);
    if (index !== -1) {
      this.listaClientes.splice(index, 1);
    }
  }

  encontrarCliente(documento: string): void {
    this.listaClientes.find(cliente => cliente.nombre === documento);
  }
  
}
