import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() evento: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
  sidebarToogle(){
    this.evento.emit()
  }

}
