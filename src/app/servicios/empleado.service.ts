import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  apiBase = "https://apirepyventdemo.herokuapp.com";
  
  constructor(private http: HttpClient) {
  }

  newEmpleado(data:any){
    return <any> this.http.post( this.apiBase + "/empleado/new",data);
  }
  delete(id:any){
    return <any> this.http.delete(this.apiBase + "/empleado/delete/"+id);
  }
  get(id:any){
    return <any> this.http.get(this.apiBase + "/empleado/"+id);
  }
  getAll(filter: string){
    return <any> this.http.get(this.apiBase + "/empleado/"+filter);
  }
}
