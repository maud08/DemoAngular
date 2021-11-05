import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  article: string;
  liste : string[] = ["Sel","Poivre"]
  constructor() { }

  ngOnInit(): void {
  
  }

  additem():void{
    this.liste.push(this.article);
  }

  deleteItem(index : number):void{
    this.liste.splice(index,1);
  }

}
