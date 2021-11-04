import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';
import { ChronoComponent } from './chrono/chrono.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ExerciceComponent,
    ChronoComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule
  ]
})
export class ExerciceModule { }
