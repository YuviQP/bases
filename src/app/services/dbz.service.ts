import { Injectable } from '@angular/core';
import { Personaje } from '../dbz/interface/dbz.interface';
@Injectable({
  providedIn: 'root'
})
export class DbzService {
  private _personajes:Personaje[]=[
    {
      nombre:'ABCD',
      poder:1500,
    },
    {
      nombre:'EGFH',
      poder:1200,
    }
  ]
  get personajes():Personaje[]{
  return [...this._personajes];
  }
  constructor() { }

  agregarPersonaje(personaje:Personaje){
    this._personajes.push(personaje);
  }
}
