import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarRep'
})
export class BuscarRepPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    var result = [];

    if(arg == ''){
      return value;
    }
    else {
      for (const rep of value) {
        console.log(rep);
        var dni: string;
        var nombre: string;
        var telefono: string;
  
        if (rep.cliente.dni != null) {
          dni = rep.cliente.dni.toString().toLowerCase();
          if (dni.indexOf(arg) > -1) {
            result.push(rep);
          }
         
        }
        if (rep.cliente.nombre != null) {
          nombre = rep.cliente.nombre.toString().toLowerCase();
          if (nombre.indexOf(arg) > -1) {
            result.push(rep)
          }
         
        }
        if (rep.cliente.telefono != null) {
          telefono = rep.cliente.telefono.toString().toLowerCase();
          if (telefono.indexOf(arg) > -1) {
            result.push(rep)
          }
          
        }
      }
    }
    return result;
  }
  
}
