export class Articulo{
  /*nombre: string = '';
  apellido: string = '';

  constructor(nombre: string, apellido: string){
     this.nombre = nombre;
     this.apellido = apellido;
  }
  */

  constructor(public codigo: number, public descripcion: string, public precio: number){
    this.codigo = codigo;
  }

  getcodigo()
  {
    return this.codigo;
  }


}


