import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceComponent } from './exercice.component';

const routes: Routes = [
  {path: '',component: ExerciceComponent, children : [
   
  ]},
  {path : '**', redirectTo:'notFound'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
