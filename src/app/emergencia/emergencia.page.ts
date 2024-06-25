import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-emergencia',
  templateUrl: './emergencia.page.html',
  styleUrls: ['./emergencia.page.scss'],
})
export class EmergenciaPage implements OnInit {
  latitud:any;
  longitud:any;
  constructor() { }

  ngOnInit(): void {
    this.obtenerUbicacion();
  }

  async obtenerUbicacion() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitud = coordinates.coords.latitude;
      this.longitud = coordinates.coords.longitude;
    } catch (error) {
      console.error('Error obteniendo la geolocalización', error);
    }
  }
}
