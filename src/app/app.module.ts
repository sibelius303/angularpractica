import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormClientesComponent } from './form-clientes/form-clientes.component';
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';
import { FilterClientesComponent } from './filter-clientes/filter-clientes.component';
import { NombreDelServicioService } from './nombre-del-servicio.service';

@NgModule({
  declarations: [
    AppComponent,
    FormClientesComponent,
    TablaClientesComponent,
    FilterClientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NombreDelServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
