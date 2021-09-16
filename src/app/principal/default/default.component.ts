import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sideBarOpend=true;

  constructor() { }

  ngOnInit(): void {
  }
  sidebartoogle(){
    this.sideBarOpend= !this.sideBarOpend;
  }

}
