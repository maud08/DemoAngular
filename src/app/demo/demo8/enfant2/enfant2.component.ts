import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-enfant2',
  templateUrl: './enfant2.component.html',
  styleUrls: ['./enfant2.component.scss']
})
export class Enfant2Component implements OnInit {

  
  @Input() title : string;

  @Output() monEvent :  EventEmitter<string>;

  constructor() { 
    //initialisation de l'objet au moment de la construction
    this.monEvent = new EventEmitter<string>();
  }

  ngOnInit(): void {

  }

  isFriday(){
    this.monEvent.emit("C'est vendredi, WEEEKEEEND!!!!");
  }

  apero(){
    this.monEvent.emit("Let's grab a Beer!!!");
  }

}
