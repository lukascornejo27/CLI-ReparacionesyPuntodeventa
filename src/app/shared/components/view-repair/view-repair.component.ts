import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReparacionService } from 'src/app/servicios/reparacion.service';

@Component({
  selector: 'app-view-repair',
  templateUrl: './view-repair.component.html',
  styleUrls: ['./view-repair.component.css']
})
export class ViewRepairComponent implements OnInit {

  reparacion: any ;
  
  constructor( private route: ActivatedRoute, private navegacion: Router,
    private repairService: ReparacionService) {
    this.route.paramMap.subscribe(params =>{
      if(params.has("id")){
        console.log(params.get("id"));
        this.repairService.get(params.get("id")).subscribe( (obj:any)=>{
          console.log(obj)
          this.reparacion = obj["doc"];
          console.log(this.reparacion)
        })
      }
      else console.log("sin params")
    })
  }

  ngOnInit(): void {
  }

}
