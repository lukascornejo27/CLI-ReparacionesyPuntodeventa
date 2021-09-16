import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertasService } from 'src/app/servicios/alertas.service';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { EmpleadoService } from 'src/app/servicios/empleado.service';
import { ReparacionService } from 'src/app/servicios/reparacion.service';

@Component({
  selector: 'app-new-repair',
  templateUrl: './new-repair.component.html',
  styleUrls: ['./new-repair.component.css']
})
export class NewRepairComponent implements OnInit {

  myForm: FormGroup;
  repairSelect = [];
  reparaciones: any; //= [{ _id: "1", nombre: "cambio de pin de carga", precio: 1000 }, { _id: "1", nombre: "cambio de pantalla", precio: 1500 }];
  empleados: any;// = [{ _id: "1", nombre: "Lucas Cornejo", user: "lucas27" }, { _id: "2", nombre: "Sofia Radicetti", user: "sofia21" }];
  clientes: any; // = [{ _id: "1", nombre: "Axel Rose", numero: 111, dni: 12345 }, { _id: "2", nombre: "Terminator", numero: 222, dni: 56789 }, { _id: "3", nombre: "Frozen", numero: 333, dni: 101112 }, { _id: "4", nombre: "Axel Rose", numero: 111, dni: 12345 }, { _id: "5", nombre: "Terminator", numero: 222, dni: 56789 }, { _id: "6", nombre: "Frozen", numero: 333, dni: 101112 }];// = [{ _id: "1", nombre: "Axel Rose", numero: 111, dni: 12345 }, { _id: "2", nombre: "Terminator", numero: 222, dni: 56789 }, { _id: "3", nombre: "Frozen", numero: 333, dni: 101112 }, { _id: "4", nombre: "Axel Rose", numero: 111, dni: 12345 }, { _id: "5", nombre: "Terminator", numero: 222, dni: 56789 }, { _id: "6", nombre: "Frozen", numero: 333, dni: 101112 }];
  estados = ["INICIAL", "TERMINADO", "INRREPARABLE"];
  filterCli = '';
  clienteModel : any = '';
  submitted = false;
  newClientForm = false;
  newClient: any;

  constructor(private fb: FormBuilder, private repairService: ReparacionService,
              private toastr: AlertasService, private empService: EmpleadoService,
              private cliService: ClienteService) {
    
    repairService.getAllItemRep('').subscribe((obj: any) => {
      console.log("respuesta", obj)
      if (obj["estado"]) {
      this.reparaciones = obj['docs']
      }
      else {
        this.toastr.error("Ocurrio un error al recuperar los item de reparacion");
      }
    });
    
    empService.getAll('').subscribe((obj:any) => {
      console.log("respuesta", obj)
      if (obj["estado"]) {
      this.empleados = obj['docs']
      }
      else {
        this.toastr.error("Ocurrio un error al recuperar los empleados");
      }
    });

    cliService.getAll('').subscribe((obj:any) => {
      console.log("respuesta", obj)
      if (obj["estado"]) {
      this.clientes = obj['docs']
      }
      else {
        this.toastr.error("Ocurrio un error al recuperar los clientes");
      }
    })

    this.myForm = this.fb.group({
      empleado: ["", [Validators.required, Validators.maxLength(50)]],
      cliente: ["", [Validators.required, Validators.maxLength(50)]],
      fecha: ["", [Validators.required]],
      descrip: ["", [Validators.maxLength(30)]],
      list_dispositivos: this.fb.array([
        this.fb.group({
          marca: ["", [Validators.required, Validators.maxLength(50)]],
          modelo: ["", [Validators.required, Validators.maxLength(50)]],
          descrip: "",
          codigo: "",
          patron: "",
          list_item_reparacion: this.fb.array([])
        })
      ]),

    })
  }

  ngOnInit(): void {
  }

  get form(){
    return this.myForm.controls;
  }
  
  /* Dispositivos */
  get list_dispositivos() :FormArray {
    return this.myForm.get("list_dispositivos") as FormArray;
  }

  addDispositivo() {
    const group = this.fb.group({
      marca: ["", [Validators.required, Validators.maxLength(50)]],
      modelo: ["", [Validators.required, Validators.maxLength(50)]],
      descrip: "",
      codigo: "",
      patron: "",
      list_item_reparacion: this.fb.array([])
    })
    this.list_dispositivos.push(group);
  }
  removeDispositivo(indice: number) {
    if(this.list_dispositivos.length > 1){
      this.list_dispositivos.removeAt(indice);
    }
  }

  /*Item de reparacion de dispositivos*/
  list_item_reparacion(indice: number): FormArray {
    return this.list_dispositivos.controls[indice].get("list_item_reparacion") as FormArray;
  }

  addItem(indice: number) {
    const group = this.fb.group({
      item: ["", [Validators.required]],
      estado: ["", [Validators.required]]
    })
    this.list_item_reparacion(indice).push(group);
  }

  removeItem(indiceDisp: number, indiceRep: number) {
    this.list_item_reparacion(indiceDisp).removeAt(indiceRep);
  }

  seleccionarCliente(cliente: any) {
    this.clienteModel = cliente;
  }

  addClient(){
    this.newClientForm =!this.newClientForm;
  }

  receiveNewClient(event: any){
    var cliente: any = event;
    this.clienteModel = cliente;
    this.newClientForm = !this.newClientForm;
    this.cliService.getAll('').subscribe((obj:any) => {
      console.log("respuesta", obj)
      if (obj["estado"]) {
      this.clientes = obj['docs']
      }
      else {
        this.toastr.error("Ocurrio un error al recuperar los clientes");
      }
    })
    console.log("newCLi", cliente)
  }

  enviar() {
    this.submitted = true;

    if (this.myForm.valid) {

      var data = this.myForm.value;
      //console.log("formA:", this.myForm.value);
      data.cliente = data.cliente._id;

      console.log("formB:", this.myForm.value);

      this.repairService.newRepair(data).subscribe((obj:any) => {
        console.log("respuesta", obj)
        if (obj["estado"]) {
          this.toastr.showSuccess("Reparacion registrada correctamente", "")
          this.reset();
        }
        else {
          this.toastr.error("Ocurrio un error al registrar la reparacion");
        }
        
      });
    }
    else {
      this.toastr.error("Form Invalido");
      console.log(this.myForm)
    }

  }

  reset() {
    this.myForm.reset();
    this.clienteModel = '';
    this.filterCli = '';
    this.submitted = false;
    this.list_dispositivos.clear();
    this.list_dispositivos.push(
      this.fb.group({
      marca: ["", [Validators.required, Validators.maxLength(50)]],
      modelo: ["", [Validators.required, Validators.maxLength(50)]],
      descrip: "",
      codigo: "",
      patron: "",
      list_item_reparacion: this.fb.array([])
      })
    )
  }

  refreshItemRep(){
    this.repairService.getAllItemRep('').subscribe((obj: any) => {
      console.log("respuesta", obj)
      if (obj["estado"]) {
      this.reparaciones = obj['docs']
      this.toastr.showSuccess("refresh item de reparacion","");
      }
      else {
        this.toastr.error("Ocurrio un error al recuperar los item de reparacion");
      }
    });
  }


}
