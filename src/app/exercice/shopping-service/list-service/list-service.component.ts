import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.scss']
})
export class ListServiceComponent implements OnInit {

  @Input() liste : Article[];
  @Output() deleteItem : EventEmitter<number>;
  @Output() addQty : EventEmitter<number>;
  @Output() removeQty : EventEmitter<number>;

  constructor() {
    this.deleteItem = new EventEmitter<number>();
    this.addQty = new EventEmitter<number>();
    this.removeQty = new EventEmitter<number>();
   }

  ngOnInit(): void {
    
  }

  removeItem(index : number) : void{
    this.deleteItem.emit(index);  
  }

  addQtyItem(index : number) : void{
    this.addQty.emit(index);
  }

  removeQtyItem(index : number) :void {
    this.removeQty.emit(index);
  }
}
