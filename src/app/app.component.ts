import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // nombre desde el cual lo llamar
  templateUrl: './app.component.html', // template que contiene la vista
  styleUrls: [ './app.component.css' ] // template que contiene el css
})

export class AppComponent  {
  // propiedades del componente
  nombre = 'Visitante'; 
  mostrarComentario = false;
  deboDinero = false;
  misAmigosSon = ['Mario','Claudio','Sofia'];
  
  changeMostrarComentario(){
    this.mostrarComentario = !this.mostrarComentario;
  }

  changeDeboDinero(){
     this.deboDinero = !this.deboDinero;
  }
}

