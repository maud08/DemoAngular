import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronoComponent } from './chrono/chrono.component';
import { ExerciceComponent } from './exercice.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingServiceComponent } from './shopping-service/shopping-service.component';

const routes: Routes = [
  {path: '',component: ExerciceComponent, children : [
    {path: 'chrono', component:ChronoComponent},
    {path: 'shopping', component:ShoppingListComponent},
    {path: 'shopping-service', component:ShoppingServiceComponent}
   
  ]},
  {path : '**', redirectTo:'notFound'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
