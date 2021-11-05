import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronoComponent } from './chrono/chrono.component';
import { ExerciceComponent } from './exercice.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '',component: ExerciceComponent, children : [
    {path: 'chrono', component:ChronoComponent},
    {path: 'shopping', component:ShoppingListComponent}
   
  ]},
  {path : '**', redirectTo:'notFound'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
