import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisCitasPageRoutingModule } from './mis-citas-routing.module';

import { MisCitasPage } from './mis-citas.page';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisCitasPageRoutingModule,
    MatExpansionModule
  ],
  declarations: [MisCitasPage]
})
export class MisCitasPageModule {}
