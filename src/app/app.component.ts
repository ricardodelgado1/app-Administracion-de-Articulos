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


  articulos:Articulo[] = [new Articulo(1,'Papas',10000),
                          new Articulo(2,'manzanas',50000),
                          new Articulo(3,'melon',80000) ];



  agregarArticulo(){

    for(let i=0;i<this.articulos.length;i++)
      if (this.articulos[i].codigo==this.codigoInput)
      {
        alert('El articulo ya existe No se puede Agregar');
        return;
      }
      if (this.codigoInput<=0  )
      {
        alert('El codigo debe ser mayor que 0');
        return;
      }
      if (this.descripcionInput=='')
      {
        alert('Debe ingresar un valor en la descripcion');
        return;
      }
      if (this.precioInput<=0)
      {
        alert('Debe ingresar un precio correcto mayor que 0');
        return;
      }


      let articulo1=new Articulo(this.codigoInput, this.descripcionInput, this.precioInput);
      this.articulos.push(articulo1);


     }

  seleccionarArticulo(articulosel:Articulo){


    this.codigoInput= articulosel.codigo;
    this.descripcionInput= articulosel.descripcion;
    this.precioInput=articulosel.precio;

  }

  borrarArticulo(articuloss:Articulo){
    if(confirm("Esta seguro de Borrarlo"))
    this.articulos.splice(this.articulos.indexOf(articuloss),1)
  }

  modificarArticulo(){
    for(let i=0;i<this.articulos.length;i++)
      if (this.articulos[i].codigo==this.codigoInput)
      {
        this.articulos[i].descripcion=this.descripcionInput;
        this.articulos[i].precio=this.precioInput;
        return;
      }
    alert('No existe el código de articulo');
  }

  limpiarValores(){
     this.codigoInput=0;
     this.descripcionInput='';
     this.precioInput= 0;
  }

}
