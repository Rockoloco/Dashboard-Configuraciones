import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent  {

  constructor() { }

   
   //Estas son salidas hacia el componente hijo
   progreso1: number = 25;
   progreso2: number = 35;

   
   
   //Aqui ya trae los valores del padre hacia el hijo
   get getProgreso1() {
     return `${this.progreso1}%`;
   }

   get getProgreso2() {
    return `${this.progreso2}%`;
  }
  
  
  
  
  
  //Estas son entradas
  //Cuando recibes un evento
  cambioValorHijo(valor:number) {
    console.log('Hey!!!', valor);
  }
}
