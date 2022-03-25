import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from '../../models/Passenger';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-passenger-dashboard',
  template: `
    <div>
      <app-passenger-count [items]="passengers"></app-passenger-count>
      <app-passenger-details *ngFor="let passenger of passengers" [item]="passenger" (remove)="handleRemove($event)" (edit)="handleEdit($event)" (view)="handleView($event)" ></app-passenger-details>
    </div>
  `,
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [];

  constructor(private passengerService: PassengerDashboardService, private router: Router) {}

  ngOnInit(): void {
    this.passengerService.getPassengers().pipe(
      catchError(error => { 
        console.log(error); 
        return of([]);
      })
    ).subscribe((data: Passenger[]) => this.passengers = data);
  }

  handleRemove(event: Passenger): void {
    this.passengerService.deletePassenger(event).subscribe((data: Passenger) => {
      this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id)
    })
  }

  handleEdit(event: Passenger): void {
    this.passengerService.updatePassenger(event).subscribe((data: Passenger)=> {
      this.passengers = this.passengers.map((passenger: Passenger) => passenger.id !== data.id ? {...passenger} : {...data})
    });
  }

  handleView(event: Passenger): void {
    this.router.navigate(['/passengers', event.id]);
  }
}


