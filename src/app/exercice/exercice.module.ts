import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';
import { ChronoComponent } from './chrono/chrono.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ListComponent } from './shopping-list/list/list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExerciceComponent,
    ChronoComponent,
    ShoppingListComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ExerciceModule { }
