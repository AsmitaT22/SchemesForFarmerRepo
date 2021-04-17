import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmercorner1',
  templateUrl: './farmercorner1.component.html',
  styleUrls: ['./farmercorner1.component.css']
})
export class Farmercorner1Component implements OnInit {

  constructor() { }

  frmr:boolean=true;

 
 
  ngOnInit(): void {
    
  }

  toggle(user:string){
    if(user=="farmer")
    this.frmr=true;
    else
    this.frmr=false;
  }

}
