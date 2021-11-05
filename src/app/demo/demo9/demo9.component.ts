import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from './services/fake-auth.service';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit {

  isConnected : boolean;

  constructor(
    private _authService : FakeAuthService
  ) { }

  ngOnInit(): void {
    this.isConnected = this._authService.isConnected;
  }

  login(){
    this._authService.connect();
    this.isConnected = this._authService.isConnected;
  }

  logout(){
    this._authService.disconnect();
    this.isConnected = this._authService.isConnected;
  }

}
