import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
//import { AlertasService } from 'src/app/servicios/alertas.service';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  
  @Output() newClientEvent = new EventEmitter<any>();
  
  myForm: FormGroup;
  submitted = false;
  newClient: any;

  constructor( private fb: FormBuilder, private cliService: ClienteService, private toastr: ToastrService) {

    this.myForm = this.fb.group({
      nombre: ["", [Validators.required, Validators.maxLength(50)]],
      apellido: ["", [Validators.required, Validators.maxLength(50)]],
      telefono: ["", [Validators.maxLength(30), Validators.pattern('^[0-9]*$')]],
      dni: ["", [Validators.required, Validators.maxLength(20), Validators.pattern('^[0-9]*$')]],
      email: ["", [Validators.email]]

    })

  }

  ngOnInit(): void {
  }

  get form(){
    return this.myForm.controls;
  }

  sendClient() {
    this.newClientEvent.emit(this.newClient);
  }

  enviar(){
    if(this.myForm.valid){
      var data = this.myForm.value;
      this.cliService.newClient(data).subscribe((obj:any) => {
        console.log("resp",data);
        if(obj["estado"]){
          this.newClient = obj["doc"];
          this.toastr.success("Cliente agregado correctamente","");
          this.sendClient();
        }
        else {
          this.toastr.error("Ocurrio un error al recuperar los clientes");
        }

      })
    }
    else{
      this.submitted = true;
    }
  }

  reset(){

  }


}
