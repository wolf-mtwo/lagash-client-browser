import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Browser2Component } from './component';

const routes: Routes = [
  { path: 'browser-2', component: Browser2Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class BrowserRoutingModule { }
