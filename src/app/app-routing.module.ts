import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'agendar-cita',
    loadChildren: () => import('./agendar-cita/agendar-cita.module').then( m => m.AgendarCitaPageModule)
  },
  {
    path: 'agendar-cita-doctor',
    loadChildren: () => import('./agendar-cita-doctor/agendar-cita-doctor.module').then( m => m.AgendarCitaDoctorPageModule)
  },
  {
    path: 'mis-citas',
    loadChildren: () => import('./mis-citas/mis-citas.module').then( m => m.MisCitasPageModule)
  },
  {
    path: 'emergencia',
    loadChildren: () => import('./emergencia/emergencia.module').then( m => m.EmergenciaPageModule)
  },
  


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
