import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarCli'
})
export class BuscarCliPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const result = [];
    if(arg == ''){
      return value;
    }
    else {
      for (const cli of value) {
        console.log(cli);
        var dni: string;
        var nombre: string;
        var telefono: string;
  
        if (cli.dni != null) {
          dni = cli.dni.toString().toLowerCase();
          if (dni.indexOf(arg) > -1) {
            result.push(cli);
          }
         
        }
        if (cli.nombre != null) {
          nombre = cli.nombre.toString().toLowerCase();
          if (nombre.indexOf(arg) > -1) {
            result.push(cli)
          }
         
        }
        if (cli.telefono != null) {
          telefono = cli.telefono.toString().toLowerCase();
          if (telefono.indexOf(arg) > -1) {
            result.push(cli)
          }
  
        }
  
      }
    }
    return result;
  }
}
