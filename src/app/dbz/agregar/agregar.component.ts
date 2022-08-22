import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../../services/dbz.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

  @Input() personajes:Personaje []=[];
  @Input() nuevo:Personaje={
    nombre:'',
    poder:0,
  };
  //@Output() onNuevoPersonaje:EventEmitter<Personaje>=new EventEmitter<Personaje>();
  constructor(private dbzService:DbzService) {

  }
  ngOnInit(): void {
  }

  agregar(){
    this.personajes.push(this.nuevo)
   // this.onNuevoPersonaje.emit(this.nuevo);
  this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }

}
