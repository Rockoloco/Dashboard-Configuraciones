import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions();


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  //Lee el valor seleccionado
  //Esta propiedad se va a el pagesComponentService
  //public linkTheme = document.querySelector('#theme');
  
  constructor( private settingsService: SettingsService) { }

  ngOnInit(): void {
    
    customInitFunctions();
    
  }

}
