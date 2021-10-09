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


  articulos:Articulo[] = [new Articulo(1,'Papas',10.000),
                          new Articulo(2,'manzanas',50.000),
                          new Articulo(3,'melon',80.000) ];



  agregarArticulo(){
    let articulo1=new Articulo(this.codigoInput, this.descripcionInput, this.precioInput);
    this.articulos.push(articulo1);


  }

  seleccionarArticulo(articulosel:Articulo){


    this.codigoInput= articulosel.codigo;
    this.descripcionInput= articulosel.descripcion;
    this.precioInput=articulosel.precio;

  }

  borrarArticulo(articuloss:Articulo){
    console.log(this.articulos.indexOf(articuloss));
    this.articulos.splice(this.articulos.indexOf(articuloss),1)
  }

  modificarArticulo(){
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==this.codigoInput)
      {
        this.articulos[x].descripcion=this.descripcionInput;
        this.articulos[x].precio=this.precioInput;
        return;
      }
    alert('No existe el código de articulo ingresado');
  }
}
