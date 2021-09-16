import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from '../shared/components/list-products/list-products.component';
import { NewRepairComponent } from '../shared/components/new-repair/new-repair.component';
import { ListRepairComponent } from '../shared/components/list-repair/list-repair.component';
import { ListSalesComponent } from '../shared/components/list-sales/list-sales.component';
import { NewSaleComponent } from '../shared/components/new-sale/new-sale.component';
import { NewProductComponent } from '../shared/components/new-product/new-product.component';
import { NewClientComponent } from '../shared/components/new-client/new-client.component';
import { ViewProductComponent } from '../shared/components/view-product/view-product.component';
import { ViewRepairComponent } from '../shared/components/view-repair/view-repair.component';
import { EditProductComponent } from '../shared/components/edit-product/edit-product.component';
import { EditRepairComponent } from '../shared/components/edit-repair/edit-repair.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from '../shared/page/sidenav/sidenav.component';
import { FooterComponent } from '../shared/page/footer/footer.component';
import { HeaderComponent } from '../shared/page/header/header.component';
import { BuscarCliPipe } from '../shared/pipes/buscar-cli.pipe';
import { BuscarRepPipe } from '../shared/pipes/buscar-rep.pipe';
import { ToastrModule } from 'ngx-toastr';
import { PanelSaleComponent } from '../shared/components/panel-sale/panel-sale.component';
import { PanelReportComponent } from '../shared/components/panel-report/panel-report.component';
import { PanelRepairComponent } from '../shared/components/panel-repair/panel-repair.component';
import { PanelClientComponent } from '../shared/components/panel-client/panel-client.component';
import { PanelEmployeeComponent } from '../shared/components/panel-employee/panel-employee.component';
import { NewItemRepComponent } from '../shared/components/new-item-rep/new-item-rep.component';
import { NewInputRepComponent } from '../shared/components/new-input-rep/new-input-rep.component';
import { ListItemRepComponent } from '../shared/components/list-item-rep/list-item-rep.component';
import { ListInputRepComponent } from '../shared/components/list-input-rep/list-input-rep.component';
import { ListClientsComponent } from '../shared/components/list-clients/list-clients.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    NewRepairComponent,
    ListRepairComponent,
    NewClientComponent,
    NewProductComponent,
    ListProductsComponent,
    NewSaleComponent,
    ListSalesComponent,
    ViewProductComponent,
    ViewRepairComponent,
    EditProductComponent,
    EditRepairComponent,
    BuscarCliPipe,
    BuscarRepPipe,
    PanelRepairComponent,
    PanelClientComponent,
    PanelEmployeeComponent,
    PanelReportComponent,
    PanelSaleComponent,
    NewItemRepComponent,
    NewInputRepComponent,
    ListInputRepComponent,
    ListItemRepComponent,
    ListClientsComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    ToastrModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
  ]
})
export class SharedModule { }
