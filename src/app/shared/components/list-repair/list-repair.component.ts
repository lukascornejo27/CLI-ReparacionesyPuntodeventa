import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReparacionService } from 'src/app/servicios/reparacion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-repair',
  templateUrl: './list-repair.component.html',
  styleUrls: ['./list-repair.component.css']
})
export class ListRepairComponent implements OnInit {
  buscarRep : any = '';
  reparaciones = [];

  constructor(
    private repairService: ReparacionService,
    private toastr: ToastrService,
    private navegacion: Router) {

      this.repairService.getAll('').subscribe((obj: any) => {
        console.log("respuesta", obj)
        if (obj["estado"]) {
        this.reparaciones = obj['docs']
        }
        else {
          this.toastr.error("Ocurrio un error al recuperar las reparaciones");
        }
      });

    }

  ngOnInit(): void {
  }

  detalleRep(idRep : string){
    console.log(idRep)
    this.navegacion.navigate(['repairs/list-repair/'+idRep]);

  }

  editRep(){

  }

  deleteRep(id : string){
    if (window.confirm("¿seguro quieres eliminar esto?")) {
      this.repairService.delete(id).subscribe((obj:any)=>{
        if(obj["estado"]){
          this.toastr.success("Reparacion eliminada correctamente","");
          var indice = this.reparaciones.findIndex( (obj: any) => obj._id == id);
          this.reparaciones.splice(indice, 1);
        }
        else {
          this.toastr.error("Reparacion eliminada correctamente","");
        }
      })
    }  
  }

}

