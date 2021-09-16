import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionComponent } from './modulos/administracion/administracion.component';
import { ProductoComponent } from './modulos/producto/producto.component';
import { ReparacionComponent } from './modulos/reparacion/reparacion.component';
import { DefaultComponent } from './principal/default/default.component';
import { EditProductComponent } from './shared/components/edit-product/edit-product.component';
import { ListClientsComponent } from './shared/components/list-clients/list-clients.component';
import { ListInputRepComponent } from './shared/components/list-input-rep/list-input-rep.component';
import { ListItemRepComponent } from './shared/components/list-item-rep/list-item-rep.component';
import { ListProductsComponent } from './shared/components/list-products/list-products.component';
import { ListRepairComponent } from './shared/components/list-repair/list-repair.component';
import { NewClientComponent } from './shared/components/new-client/new-client.component';
import { NewInputRepComponent } from './shared/components/new-input-rep/new-input-rep.component';
import { NewItemRepComponent } from './shared/components/new-item-rep/new-item-rep.component';
import { NewProductComponent } from './shared/components/new-product/new-product.component';
import { NewRepairComponent } from './shared/components/new-repair/new-repair.component';
import { PanelClientComponent } from './shared/components/panel-client/panel-client.component';
import { PanelEmployeeComponent } from './shared/components/panel-employee/panel-employee.component';
import { PanelRepairComponent } from './shared/components/panel-repair/panel-repair.component';
import { PanelReportComponent } from './shared/components/panel-report/panel-report.component';
import { PanelSaleComponent } from './shared/components/panel-sale/panel-sale.component';
import { ViewProductComponent } from './shared/components/view-product/view-product.component';
import { ViewRepairComponent } from './shared/components/view-repair/view-repair.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'products',
        component: ProductoComponent,
        children: [
          {
            path: 'newproduct',
            component: NewProductComponent,

          },
          {
            path: 'list-products',
            component: ListProductsComponent,
          },
          {
            path: 'view-product/:id',
            component: ViewProductComponent,
          },
          {
            path: 'edit-product/:id',
            component: EditProductComponent,
          },
        ]
      },
      {
        path: 'repairs',
        component: ReparacionComponent,
        children: [
          {
            path: 'list-repair',
            component: ListRepairComponent
          },
          {
            path: 'list-repair/:id',
            component: ViewRepairComponent
          },
          {
            path: 'new-repair',
            component: NewRepairComponent,
          }
        ]
      },
      {
        path: 'admin',
        component: AdministracionComponent,
        children: [
          {
            path: 'repair',
            component: PanelRepairComponent,
            children:[
              {
                path: 'list',
                component: ListRepairComponent,
              },
              {
                path: 'add-item-rep',
                component: NewItemRepComponent,
              },
              {
                path: 'add-input-rep',
                component: NewInputRepComponent,
              },
              {
                path: 'list-item-rep',
                component: ListItemRepComponent,
              },
              {
                path: 'list-input-rep',
                component: ListInputRepComponent,
              }
            ]
          },
          {
            path: 'clients',
            component: PanelClientComponent,
            children: [
              {
                path:'add-cli',
                component: NewClientComponent
              },
              {
                path:'list',
                component: ListClientsComponent
              },
              {
                path:'debtor-cli',
                component: ListClientsComponent
              },
              {
                path:'money-sign',
                component: ListClientsComponent
              }
            ]
          },
          {
            path: 'reports',
            component: PanelReportComponent
          },
          {
            path: 'employees',
            component: PanelEmployeeComponent
          },
          {
            path: 'sales',
            component: PanelSaleComponent
          }

        ]
      }
    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
