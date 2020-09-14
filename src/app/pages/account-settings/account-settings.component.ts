import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  
  
  
  constructor(private settingsService: SettingsService) { }
 
  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  
  
  
  //La logica de esta función se va a settingService
  //Función 1
  changeTheme(theme: string) {
     
     //Esta función se llama del servicio
     this.settingsService.changeTheme(theme);
     

  }


}
