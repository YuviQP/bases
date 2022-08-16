import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes:string []=["A","B","C","D"];
  heroeBorrado:string='';

  borarHeroes():void{
    this.heroeBorrado=this.heroes.shift() || "";
  }

}
