import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  monScoubidou : string = "Hello world!!!"
  constructor() { }

  ngOnInit(): void {
  }

  maMethode(){
    this.monScoubidou = "c'est un scoubidou !!!"
  }

}
