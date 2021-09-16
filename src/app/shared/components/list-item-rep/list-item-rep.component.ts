import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-list-item-rep',
  templateUrl: './list-item-rep.component.html',
  styleUrls: ['./list-item-rep.component.css']
})
export class ListItemRepComponent implements OnInit {

  buscarItem : any = '';
  itemsRep = [];

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService,
    private navegacion: Router) {

      this.adminService.getAllItemRep('').subscribe((obj: any) => {
        console.log("respuesta", obj)
        if (obj["estado"]) {
        this.itemsRep = obj['docs']
        }
        else {
          this.toastr.error("Ocurrio un error al recuperar las itemsRep");
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
      this.adminService.deleteItemRep(idRep).subscribe((obj:any)=>{
        if(obj["estado"]){
          this.toastr.success("Eliminado Correctamente");
          var indice = this.itemsRep.findIndex( (obj: any) => obj._id == idRep);
          this.itemsRep.splice(indice, 1);
          
        }
      });
    }
  }

}
