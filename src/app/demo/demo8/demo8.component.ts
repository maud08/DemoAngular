import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {

  maVar : string = "J'attends le contenu de l'enfant"

  constructor() { 
    
  }

  ngOnInit(): void {

  }

  reactToChildren(s: string){
    this.maVar = s;
  }

}
