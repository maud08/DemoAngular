import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  maVar : number = 0;
  isClickable : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeValue(){
    this.maVar = 42;
  }
  change() : boolean{
    if(this.maVar > 5){
      this.isClickable = true;
    }
    else{
      this.isClickable = false;
    }
    return this.isClickable;
  }
}
