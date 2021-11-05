import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  listeLien : Link[];
  childrenVisible : any;
  constructor() { }

  ngOnInit(): void {
    this.listeLien = [
      {url : '/home', title : 'Home'},
      {url: '/about', title: 'about'},
      {title: 'Demos',children:[
        {url:'demo/demo1', title: 'Demo 1 - Binding One Ways'},
        {url:'demo/demo2', title: 'Demo 2 - Binding two way'},
        {url:'demo/demo3', title: 'Demo 3 - Event Binding'},
        {url:'demo/demo4', title: 'Demo 4 - Attribute binding'},
        {url:'demo/demo5', title: 'Demo 5 - Pipes'},
        {url:'demo/demo6', title: 'Demo 6 - Component Directive'},
        {url:'demo/demo7', title: 'Demo 7 - Structural Directive'},
        {url:'demo/demo8', title: 'Demo 8-  Input/Output'},
        {url:'demo/demo9', title: 'Demo 9 - Les services'}
      ]},
      {title : 'Exercices',children:[
        {url:'exercice/chrono',title:'Chrono'},
        {url:"exercice/shopping",title:'Shopping List'},
        {url:'exercice/shopping-service', title:'Shopping avec services'}
      ]}

    ]
  }

  //Pour récupere l'index de mon objet
  toggle(index:number){
   this.listeLien[index].isVisible = !this.listeLien[index].isVisible;
  }


}


export class Link{
  title : string;
  url? : string;
  children? : Link[];
  isVisible? : boolean;
}
