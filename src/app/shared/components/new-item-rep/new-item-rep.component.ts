import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-new-item-rep',
  templateUrl: './new-item-rep.component.html',
  styleUrls: ['./new-item-rep.component.css']
})
export class NewItemRepComponent implements OnInit {

  myForm: FormGroup;
  newClient: any;
  submitted: boolean = false;

  constructor( private fb: FormBuilder, private adminService: AdminService, private toastr: ToastrService) {

    this.myForm = this.fb.group({
      nombre: ["", [Validators.required, Validators.maxLength(50)]],
      dificultad: [""],
      precio: ["", [Validators.required, Validators.maxLength(20), Validators.pattern('^[0-9]*$')]]

    })

  }

  ngOnInit(): void {
  }

  get form(){
    return this.myForm.controls;
  }

  enviar(){
    if(this.myForm.valid){
      var data = this.myForm.value;
      this.adminService.newItemRep(data).subscribe((obj:any) => {
        console.log("resp",data);
        if(obj["estado"]){
          this.newClient = obj["doc"];
          this.toastr.success("Item de reparacion agregado correctamente","");
        }
        else {
          this.toastr.error("Ocurrio un error al recuperar los Items");
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
