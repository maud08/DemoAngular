import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {

  currentStyle : any;
  italic :boolean = false;
  bold :boolean = false;
  size :boolean = false;
  class : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.setCurrentStyle();
  }

  setCurrentStyle(){
    //this.currentStyle = {'font-style' : 'italic'};
    //this.currentStyle = {'font-weight' : 'bold'}
    this.currentStyle = {
      'font-size' : this.size ? '24px' : '12px',
      'font-weight' : this.bold ? 'bold' : 'normal',
      'font-style' : this.italic ? 'italic' : 'normal'
    }
  }

  switchBold(){
    this.bold = !this.bold;
    this.setCurrentStyle();
  }
  switchItalic(){
    this.italic = !this.italic;
    this.setCurrentStyle();
  }
  switchSize(){
    this.size = !this.size;
    this.setCurrentStyle();
  }
  switchClass(){
    this.class = !this.class;
  }
}
