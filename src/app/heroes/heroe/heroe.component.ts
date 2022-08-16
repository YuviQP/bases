import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html',
})

export class HeroeComponent{
    title : string = 'Heroes';
    nombre: string = 'Ironman';
    anio  : number = 45;

    obtenerNombre():string{
        return `${ this.nombre}-${this.anio}`;
    }

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
        this.nombre="Spiiderman";
    }

    cambiarEdad():void{
        this.anio=50;
    }
}