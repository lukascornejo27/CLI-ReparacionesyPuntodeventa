import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiBase = "https://apirepyventdemo.herokuapp.com";

  constructor(private http: HttpClient) {
  }

  newClient(data: any){
    return <any> this.http.post( this.apiBase + "/cliente/new",data);
  }
  delete(id: any){
    return <any> this.http.delete(this.apiBase + "/cliente/delete/"+id);
  }
  get(id: any){
    return <any> this.http.get(this.apiBase + "/cliente/"+id);
  }
  getAll(filter: string){
    return <any> this.http.get(this.apiBase + "/cliente/"+filter);
  }
  
}
