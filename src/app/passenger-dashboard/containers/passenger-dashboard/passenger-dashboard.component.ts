import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/Passenger';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';

@Component({
  selector: 'app-passenger-dashboard',
  template: `
    <div>
      <app-passenger-count [items]="passengers"></app-passenger-count>
      <app-passenger-details *ngFor="let passenger of passengers" [item]="passenger" (remove)="handleRemove($event)" (edit)="handleEdit($event)" ></app-passenger-details>
    </div>
  `,
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [];

  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit(): void {
    this.passengerService.getPassengers().subscribe((data: Passenger[]) => this.passengers = data);
  }

  handleRemove(event: Passenger): void {
    this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id)
  }

  handleEdit(event: Passenger): void {
    this.passengers = this.passengers.map((passenger: Passenger) => passenger.id !== event.id ? {...passenger} : {...event})
  }
}


