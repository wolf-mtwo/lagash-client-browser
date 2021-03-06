import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AppComponentsModule } from 'src/app/components/components.module';
import { SearchModule } from 'src/app/components/search/search.module';
import { BookComponent } from './book/component';
import { BooksComponent } from './component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'books/:book_id', component: BookComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AppComponentsModule,
    SearchModule,
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    BookComponent,
    BooksComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
})
export class BooksRoutingModule { }
