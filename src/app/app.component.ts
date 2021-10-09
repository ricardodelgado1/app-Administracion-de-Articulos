import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { Articulo } from './articulo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'Administración de Articulos ';
  nombreInput:string = '';
  apellidoInput:string = '';

  codigoInput:number = 0;
  descripcionInput:string = '';
  precioInput:number = 0;


  personas:Persona[] = [new Persona('Franklin','Jiménez'),
                        new Persona('Ana','Garcia'),
                        new Persona('Carlos', 'Perez') ];

  articulos:Articulo[] = [new Articulo(1,'Papas',10.000),
                          new Articulo(2,'manzanas',50.000),
                          new Articulo(3,'melon',80.000) ];


  agregarPersona(){
    let persona1=new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
  }

  agregarArticulo(){
    let articulo1=new Articulo(this.codigoInput, this.descripcionInput, this.precioInput);
    this.articulos.push(articulo1);
  }

  seleccionarArticulo(){

      console.log(this.articulos.values)
  }
}
