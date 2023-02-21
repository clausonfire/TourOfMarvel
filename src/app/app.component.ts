import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}

// que es la inyeccion de dependencias?


// que es un servicio?
// es un proovedor de datos que puede inyectar otras dependencias de la aplicación, 
// ya sean otros servicios como el de Http

// que es un observable?
// el servicio consigue unos recursos y el observable los provee

// que hace el suscribe?
// es un equivalete al .then

// que hace el pipe? 
// herramienta para transformar los datos a la hora de mostrarlos