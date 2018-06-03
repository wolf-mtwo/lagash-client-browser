import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThesisesComponent } from './component';
import { ThesisComponent } from './thesis/component';

const routes: Routes = [
  { path: 'thesis', component: ThesisesComponent },
  { path: 'thesis/:thesis_id', component: ThesisComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ThesisRoutingModule { }
