import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EnfantComponent } from './home/enfant/enfant.component';
import { HomeComponent } from './home/home.component';
import { NouveauModule } from './nouveau/nouveau.module';

const routes: Routes = [
  {path : 'home', component : HomeComponent, children: [
    {path: 'enfant', component: EnfantComponent}
  ]},
  {path : 'about', component : AboutComponent},
  {path : 'nouveau', loadChildren: () => import('./nouveau/nouveau.module').then(m => m.NouveauModule)},
  {path : 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)},
  {path: 'exercice', loadChildren: () => import('./exercice/exercice.module').then(m => m.ExerciceModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
