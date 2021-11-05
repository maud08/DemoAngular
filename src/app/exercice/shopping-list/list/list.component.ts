import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() liste : string[];
  @Output() deleteItem : EventEmitter<number>;

  constructor() {
    this.deleteItem = new EventEmitter<number>();
   }

  ngOnInit(): void {
    
  }

  remove(index : number) : void{
    this.deleteItem.emit(index);
  }

}
