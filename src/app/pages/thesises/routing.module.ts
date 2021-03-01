import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AppComponentsModule } from 'src/app/components/components.module';
import { SearchModule } from 'src/app/components/search/search.module';
import { ThesisesComponent } from './component';
import { ThesisComponent } from './thesis/component';


const routes: Routes = [
  { path: 'thesis', component: ThesisesComponent },
  { path: 'thesis/:thesis_id', component: ThesisComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),
    AppComponentsModule,
    SearchModule,
    CommonModule,
    FlexLayoutModule
  ],
  exports: [ RouterModule ],
  declarations: [
    ThesisComponent,
    ThesisesComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class ThesisRoutingModule { }
