import { Component, Input } from '@angular/core';

@Component({
  selector: 'hola', // nombre desde el cual lo llamar
  template: `<h1>Hola {{name}}!</h1>`,  // Otra forma de poner codigo
  styles: [`h1 { font-family: Lato; }`] // Otra forma de poner codigo
})
export class HolaComponent  {
  @Input() name: string; // input es parametro
}
