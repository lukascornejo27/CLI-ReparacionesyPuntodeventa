import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  buscarCli : any = '';
  clientes = [];

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService,
    private navegacion: Router) {

      this.adminService.getAllCli('').subscribe((obj: any) => {
        console.log("respuesta", obj)
        if (obj["estado"]) {
        this.clientes = obj['docs']
        }
        else {
          this.toastr.error("Ocurrio un error al recuperar los clientes");
        }
      });

    }

  ngOnInit(): void {
  }
  /*
  detalle(idRep : string){
    console.log(idRep)
    this.navegacion.navigate(['admin/itemsRep/list-repair/'+idRep]);

  }
  */
  edit(idRep : string){

  }

  delete(idRep : string){
    if (window.confirm("¿seguro quieres eliminar esto?")) {
      this.adminService.deleteCli(idRep).subscribe((obj:any)=>{
        if(obj["estado"]){
          this.toastr.success("Eliminado Correctamente");
          var indice = this.clientes.findIndex( (obj: any) => obj._id == idRep);
          this.clientes.splice(indice, 1);
          
        }
      });
    }
  }

}
