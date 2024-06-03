import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarCitaDoctorPageRoutingModule } from './agendar-cita-doctor-routing.module';

import { AgendarCitaDoctorPage } from './agendar-cita-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarCitaDoctorPageRoutingModule
  ],
  declarations: [AgendarCitaDoctorPage]
})
export class AgendarCitaDoctorPageModule {}
