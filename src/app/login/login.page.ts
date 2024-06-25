import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  datos:any;
  constructor() { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(): void {
    fetch('https://dog.ceo/api/breed/hound/list')
      .then(response => response.json())
      .then(data => {
        this.datos = data.message;
        console.log(this.datos);
      })
      .catch(error => console.error('Error:', error));
  }
}
