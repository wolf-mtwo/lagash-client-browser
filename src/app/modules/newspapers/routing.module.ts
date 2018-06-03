import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewspapersComponent } from './component';
import { NewspaperComponent } from './newspaper/component';

const routes: Routes = [
  { path: 'newspapers', component: NewspapersComponent },
  { path: 'newspapers/:newspaper_id', component: NewspaperComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  // declarations: [NewspaperComponent]
})
export class NewspapersRoutingModule { }
