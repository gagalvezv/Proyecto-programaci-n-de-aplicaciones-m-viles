import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarCitaDoctorPage } from './agendar-cita-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarCitaDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarCitaDoctorPageRoutingModule {}
