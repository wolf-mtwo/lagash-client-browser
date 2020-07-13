import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './component';
import { SearchDetailComponent } from './detail/component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'search/:search_id', component: SearchDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  // declarations: [BookComponent]
})
export class SearchRoutingModule { }
