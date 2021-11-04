import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {

  maVar1 : string = "Hello les mobiles";
  maVar2 : number = 10.07;
  maVar3 : Date = new Date();
  maVar4 : number = 42;

  constructor() { }

  ngOnInit(): void {
  }

}
