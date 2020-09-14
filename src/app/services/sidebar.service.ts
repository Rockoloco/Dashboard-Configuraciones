import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  
  menu: any[] = [
     {
       titulo: 'Principal!!!',
       icono: 'mdi mdi-gauge',
       submenu: [
          {titulo: 'Main', url: '/'},
          {titulo: 'ProgressBar', url: 'progress'},
          {titulo: 'Gráficas', url: 'grafica1'},
       ]

     },
     {
      titulo: 'Principal 222',
      icono: 'mdi mdi-gauge',
      submenu: [
         {titulo: 'Main', url: '/'},
         {titulo: 'ProgressBar', url: 'progress'},
         {titulo: 'Gráficas', url: 'grafica1'},
      ]

    }

  ];
  
  constructor() { }
}
