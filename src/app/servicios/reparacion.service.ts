import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReparacionService {

  apiBase = "https://apirepyventdemo.herokuapp.com";
  
  constructor(private http: HttpClient) {
  }

  newRepair(data: any){
    return <any> this.http.post( this.apiBase + "/reparacion/new",data);
  }
  delete(id: any){
    return this.http.delete(this.apiBase + "/reparacion/delete/"+id);
  }
  get (id: any){
    return <any> this.http.get(this.apiBase + "/reparacion/"+id);
  }
  getAll(filter: string){
    return <any> this.http.get(this.apiBase + "/reparacion/"+filter);
  }
  getAllItemRep(filter: string){
    return <any> this.http.get(this.apiBase + "/item-reparacion/"+filter);
  }
}
