import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './component';
import { BookComponent } from './book/component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'books/:_id', component: BookComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: [BookComponent]
})
export class BooksRoutingModule { }
