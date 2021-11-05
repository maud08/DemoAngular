import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ExerciceComponent } from './exercice.component';
import { ChronoComponent } from './chrono/chrono.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ListComponent } from './shopping-list/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingServiceComponent } from './shopping-service/shopping-service.component';
import { ListServiceComponent } from './shopping-service/list-service/list-service.component';


@NgModule({
  declarations: [
    ExerciceComponent,
    ChronoComponent,
    ShoppingListComponent,
    ListComponent,
    ShoppingServiceComponent,
    ListServiceComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExerciceModule { }
