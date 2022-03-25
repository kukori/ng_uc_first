import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';

import { PassengerDashboardService } from './services/passenger-dashboard.service';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailsComponent,
    PassengerViewerComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    PassengerDashboardComponent,
    PassengerViewerComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule { }
