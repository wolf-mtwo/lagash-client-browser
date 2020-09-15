import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'loans', component: LoansComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
})
export class LoansRoutingModule { }
