import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-agendar-cita-doctor',
  templateUrl: './agendar-cita-doctor.page.html',
  styleUrls: ['./agendar-cita-doctor.page.scss'],
})

export class AgendarCitaDoctorPage implements OnInit {
  ListaMedicos:any;
  constructor() { }

  ngOnInit(): void {
    this.obtenerMedicos();
  }

  obtenerMedicos(): void {
    fetch('https://randomuser.me/api/?nat=CA&results=7')
      .then(response => response.json())
      .then(data => {
        this.ListaMedicos = data.results;
        console.log(this.ListaMedicos);
      })
      .catch(error => console.error('Error:', error));
  }
}
