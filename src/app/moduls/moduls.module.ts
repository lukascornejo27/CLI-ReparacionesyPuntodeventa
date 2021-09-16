import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from '../principal/default/default.component';
import { ReparacionComponent } from '../modulos/reparacion/reparacion.component';
import { ProductoComponent } from '../modulos/producto/producto.component';
import { ClienteComponent } from '../modulos/cliente/cliente.component';
import { VentaComponent } from '../modulos/venta/venta.component';
import { InventarioComponent } from '../modulos/inventario/inventario.component';
import { AdministracionComponent } from '../modulos/administracion/administracion.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from './shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    DefaultComponent,
    ReparacionComponent,
    ProductoComponent,
    ClienteComponent,
    VentaComponent,
    InventarioComponent,
    AdministracionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ]
})
export class ModulsModule { }
