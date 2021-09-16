import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiBase = "https://apirepyventdemo.herokuapp.com";

  constructor(private http: HttpClient) {
  }

  newClient(data: any){
    return <any> this.http.post( this.apiBase + "/cliente/new",data);
  }
  deleteCli(id: any){
    return <any> this.http.delete(this.apiBase + "/cliente/delete/"+id);
  }
  getCli(id: any){
    return <any> this.http.get(this.apiBase + "/cliente/"+id);
  }
  getAllCli(filter: string){
    return <any> this.http.get(this.apiBase + "/cliente/"+filter);
  }


  newEmp(data: any){
    return <any> this.http.post( this.apiBase + "/empleado/new",data);
  }
  deleteEmp(id: any){
    return <any> this.http.delete(this.apiBase + "/empleado/delete/"+id);
  }
  getEmp(id: any){
    return <any> this.http.get(this.apiBase + "/empleado/"+id);
  }
  getAllEmp(filter: string){
    return <any> this.http.get(this.apiBase + "/empleado/"+filter);
  }


  newRep(data: any){
    return <any> this.http.post( this.apiBase + "/reparacion/new",data);
  }
  deleteRep(id: any){
    return <any> this.http.delete(this.apiBase + "/reparacion/delete/"+id);
  }
  getRep(id: any){
    return <any> this.http.get(this.apiBase + "/reparacion/"+id);
  }
  getAllRep(filter: string){
    return <any> this.http.get(this.apiBase + "/reparacion/"+filter);
  }
  

  newItemRep(data: any){
    return <any> this.http.post( this.apiBase + "/item-reparacion/new",data);
  }
  deleteItemRep(id: any){
    return <any> this.http.delete(this.apiBase + "/item-reparacion/delete/"+id);
  }
  getItemRep(id: any){
    return <any> this.http.get(this.apiBase + "/item-reparacion/"+id);
  }
  getAllItemRep(filter: string){
    return <any> this.http.get(this.apiBase + "/item-reparacion/"+filter);
  }


  newInsumoRep(data: any){
    return <any> this.http.post( this.apiBase + "/insumo/new",data);
  }
  deleteInsumoRep(id: any){
    return <any> this.http.delete(this.apiBase + "/insumo/delete/"+id);
  }
  getInsumoRep(id: any){
    return <any> this.http.get(this.apiBase + "/insumo/"+id);
  }
  getAllInsumoRep(filter: string){
    return <any> this.http.get(this.apiBase + "/insumo/"+filter);
  }
  

  
}
