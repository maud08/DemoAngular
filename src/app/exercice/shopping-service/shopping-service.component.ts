import { Component, OnInit } from '@angular/core';
import { Article } from './models/article.model';
import { ShoppingService } from './services/shopping.service';

@Component({
  selector: 'app-shopping-service',
  templateUrl: './shopping-service.component.html',
  styleUrls: ['./shopping-service.component.scss']
})
export class ShoppingServiceComponent implements OnInit {

  articleName: string;
  liste : Article[];

  constructor(
    private _shoppingService : ShoppingService
  ) { }

  ngOnInit(): void {

    this.liste = this._shoppingService.liste;
  }

  addItem():void{
    const article = new Article;
    article.Name = this.articleName
    this._shoppingService.addItem(article);

  }

  deleteItem(index : number):void{
    this._shoppingService.remove(index); 
  }

  addQtyItem(index : number):void{
    this._shoppingService.addQty(index);
  }

  removeQtyItem(index : number):void{
    this._shoppingService.removeQty(index);
  }

}
