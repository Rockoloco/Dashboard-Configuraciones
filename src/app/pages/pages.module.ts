import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Exportación de las graficas
import {ChartsModule} from 'ng2-charts';

//Modulos
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';




@NgModule({
  declarations: [
       DashboardComponent,
       ProgressComponent,
       Grafica1Component,
       PagesComponent,
       AccountSettingsComponent
      ],
  exports: [  
              DashboardComponent,
              ProgressComponent,
              Grafica1Component,
              PagesComponent,
              AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ChartsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
