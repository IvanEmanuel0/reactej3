export class Contacto {
    nombre = "";
    apellido = "";
    edad = "";
    conectado = false;

    constructor(nombre, apellido, edad, conectado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.conectado = conectado;
    }

}