import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';
import { Passenger } from '../../models/Passenger';

@Component({
  selector: 'app-passenger-viewer',
  template: `
    <div>
      <app-passenger-form [detail]="passenger"></app-passenger-form>
    </div>
  `,
  styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {
  passenger?: Passenger;

  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit(): void {
    this.passengerService.getPassenger(1).subscribe((data: Passenger) => this.passenger = data);
  }
}
