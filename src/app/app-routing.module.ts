import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesComponent }      from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { BrowserComponent } from './browser/component';

const routes: Routes = [
  { path: 'main', component: HomeComponent },
  { path: 'browser', component: BrowserComponent },
  { path: '', component: HomeComponent ,  pathMatch: 'full'}
];

@NgModule({
  // imports: [
  //   // CommonModule
  // ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
