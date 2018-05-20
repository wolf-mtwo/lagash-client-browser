import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesComponent }      from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';

console.log(HomeComponent)

const routes: Routes = [
  { path: 'browser', component: HomeComponent }
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
