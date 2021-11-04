import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  temps : number;
  timer : any;
  isdisabled : boolean;
  isStarted : boolean;

  constructor() { }

  ngOnInit(): void {
    this.temps=0;
    this.isdisabled = true;
    this.isStarted = false;
  }

  disabled() : boolean{
    return this.isdisabled;
  }

  started() {
   this.timer = setInterval(()=>{
     this.temps++;
   },1000)
    this.isdisabled = false;
    this.isStarted = true;
  }

  pause(){
    clearInterval(this.timer);
    this.isStarted = false;
  }

 stop(){
  clearInterval(this.timer);
  this.timer = null;
 }

  reset() {
    this.stop();
    this.temps = 0;
    this.isStarted = false;
    this.isdisabled = true;
  }

}
