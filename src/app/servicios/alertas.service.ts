import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private toastr: ToastrService) { }
  showSuccess(msj:string, title: string) {
    this.toastr.success(msj,title);
  }
  deleteSuccess(msj:string) {
    this.toastr.error(msj);
  }
  error(msj: string){
    this.toastr.info(msj);
  }
}
