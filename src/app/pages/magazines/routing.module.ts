import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AppComponentsModule } from 'src/app/components/components.module';
import { SearchModule } from 'src/app/components/search/search.module';
import { MagazinesComponent } from './component';
import { MagazineComponent } from './magazine/component';

const routes: Routes = [
  { path: 'magazines', component: MagazinesComponent },
  { path: 'magazines/:magazine_id', component: MagazineComponent }
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
    MagazineComponent,
    MagazinesComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
})
export class MagazinesRoutingModule { }
