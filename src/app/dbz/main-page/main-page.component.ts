import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent{

  personajes:Personaje[]=[
    {
      nombre:'ABCD',
      poder:1500,
    },
    {
      nombre:'EGFH',
      poder:1200,
    }
  ]
  nuevo:Personaje={
    nombre:'',
    poder:0,
  }

  cambiarNombre(event:any){
    console.log(event.target.value);
    }

}
