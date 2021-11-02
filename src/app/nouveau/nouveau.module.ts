import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NouveauRoutingModule } from './nouveau-routing.module';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    NouveauRoutingModule
  ]
})
export class NouveauModule { }
