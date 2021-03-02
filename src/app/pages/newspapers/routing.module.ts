import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AppComponentsModule } from 'src/app/components/components.module';
import { SearchModule } from 'src/app/components/search/search.module';
import { NewspapersComponent } from './component';
import { NewspaperComponent } from './newspaper/component';

const routes: Routes = [
  { path: 'newspapers', component: NewspapersComponent },
  { path: 'newspapers/:newspaper_id', component: NewspaperComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AppComponentsModule,
    SearchModule,
    CommonModule,
    FlexLayoutModule
  ],
  exports: [ RouterModule ],
  declarations: [
    NewspaperComponent,
    NewspapersComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
})
export class NewspapersRoutingModule { }
