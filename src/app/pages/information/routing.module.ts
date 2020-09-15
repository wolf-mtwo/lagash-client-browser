import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './component';
import { LoginComponent } from './login/component';
import { InformationHistoryComponent } from './history/component';
import { InformationMissionComponent } from './mission/component';
import { InformationObjectivesComponent } from './objectives/component';
import { InformationOrganizationComponent } from './organization/component';
import { InformationActivitiesComponent } from './activities/component';
import { InformationSpecialtiesComponent } from './specialties/component';
import { InformationServicesComponent } from './services/component';
import { InformationScheduleComponent } from './schedule/component';
import { InformationRequirementsComponent } from './requirements/component';

const routes: Routes = [
  { path: 'information', component: InformationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'information/history', component: InformationHistoryComponent },
  { path: 'information/mission', component: InformationMissionComponent },
  { path: 'information/objectives', component: InformationObjectivesComponent },
  { path: 'information/organization', component: InformationOrganizationComponent },
  { path: 'information/activities', component: InformationActivitiesComponent },
  { path: 'information/specialties', component: InformationSpecialtiesComponent },
  { path: 'information/services', component: InformationServicesComponent },
  { path: 'information/schedule', component: InformationScheduleComponent },
  { path: 'information/requirements', component: InformationRequirementsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class InformationRoutingModule { }
