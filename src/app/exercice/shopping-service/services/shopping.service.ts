import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  liste : Article[] = [];

  constructor() { }

  addItem(article : Article):void{
    
    //exprisson lamda equivant de ling c#
    let index = this.liste.findIndex(x => x.Name == article.Name);
    if(index >-1){
      this.addQty(index);
    }else{
      this.liste.push(article);
    }
  }

  addQty(index : number):void{
    this.liste[index].Quantity++;
  }

  removeQty(index : number):void{
    if(this.liste[index].Quantity > 1){
      this.liste[index].Quantity--
    }
    else{
      this.remove(index);
    }
  }

  remove(index : number):void{
    this.liste.splice(index,1);
  }
}
