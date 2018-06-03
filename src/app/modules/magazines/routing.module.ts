import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagazinesComponent } from './component';
import { MagazineComponent } from './magazine/component';

const routes: Routes = [
  { path: 'magazines', component: MagazinesComponent },
  { path: 'magazines/:magazine_id', component: MagazineComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  // declarations: [MagazineComponent]
})
export class MagazinesRoutingModule { }
