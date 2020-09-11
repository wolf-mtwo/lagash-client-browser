import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './component';
import { SearchDetailComponent } from './detail/component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'search/:search_id', component: SearchDetailComponent }
];

@NgModule({
  declarations: [
    SearchComponent,
    SearchDetailComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    MatIconModule,
    CommonModule,
    FormsModule,
  ],
  exports: [ RouterModule ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SearchRoutingModule { }
