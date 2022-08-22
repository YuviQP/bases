import { Component, OnInit,Input } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
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
  constructor() { }
  ngOnInit(): void {
  }

  agregar(){
    this.personajes.push(this.nuevo)
    this.nuevo={
      nombre:'',
      poder:0
    }
  }

}
